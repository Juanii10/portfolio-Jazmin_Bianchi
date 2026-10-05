// Baja los reels originales del Drive (.mov, de 6 a 112 MB cada uno), los comprime a mp4 livianos para
// la web y guarda también una imagen de portada de cada uno.
//
//   node tools/comprimir_reels.mjs            -> procesa todos los que falten
//   node tools/comprimir_reels.mjs cuan       -> solo una marca
//
// Se procesa de a un video por vez y se borra el original apenas termina, así no hace falta mucho disco.
// Los mp4 quedan en public/video/reels/<marca>-<n>.mp4 (+ .jpg). Si ya existen, se saltean.
// El ffmpeg viene del paquete ffmpeg-static (devDependency).
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ffmpeg from 'ffmpeg-static'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = join(raiz, '_referencia', 'reels-tmp') // _referencia no se versiona
const salida = join(raiz, 'public', 'video', 'reels')
mkdirSync(tmp, { recursive: true })
mkdirSync(salida, { recursive: true })

// Ids de los archivos originales en Drive, por marca. Viven en tools/reels-drive.json, que NO se sube al
// repositorio (está en el .gitignore) porque quien tenga un id puede bajar el video original.
// Hay un modelo en tools/reels-drive.ejemplo.json.
const archivoIds = join(raiz, 'tools', 'reels-drive.json')
if (!existsSync(archivoIds)) {
  console.error('Falta tools/reels-drive.json con los ids de Drive (ver tools/reels-drive.ejemplo.json).')
  process.exit(1)
}
const REELS = JSON.parse(readFileSync(archivoIds, 'utf8'))

const MB = (ruta) => (statSync(ruta).size / 1e6).toFixed(1)
const correr = (cmd, args) => {
  const r = spawnSync(cmd, args, { encoding: 'utf8' })
  if (r.status !== 0) throw new Error(`${cmd} falló (${r.status}): ${(r.stderr || '').slice(-600)}`)
}

const soloMarca = process.argv[2]
for (const [marca, ids] of Object.entries(REELS)) {
  if (soloMarca && soloMarca !== marca) continue
  for (const [i, id] of ids.entries()) {
    const base = `${marca}-${i + 1}`
    const mp4 = join(salida, `${base}.mp4`)
    if (existsSync(mp4)) {
      console.log(`= ${base}.mp4 ya existe (${MB(mp4)} MB)`)
      continue
    }
    const original = join(tmp, `${base}.mov`)
    console.log(`↓ ${base}: descargando…`)
    correr('curl', ['-sSL', '-o', original, `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`])
    console.log(`  original: ${MB(original)} MB; comprimiendo…`)
    // Vertical de 540 px de ancho, 30 fps, con el audio original (AAC 96 kbps) y listo para streaming.
    correr(ffmpeg, [
      '-y', '-i', original,
      '-vf', 'scale=540:-2:flags=lanczos,fps=30',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '29', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '96k', '-ac', '2',
      '-movflags', '+faststart', mp4,
    ])
    correr(ffmpeg, ['-y', '-ss', '1', '-i', original, '-frames:v', '1', '-vf', 'scale=540:-2', '-q:v', '4', join(salida, `${base}.jpg`)])
    rmSync(original)
    console.log(`✓ ${base}.mp4: ${MB(mp4)} MB`)
  }
}
console.log('Listo.')
