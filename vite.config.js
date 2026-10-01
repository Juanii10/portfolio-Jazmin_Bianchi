import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El diseño está hecho sobre un frame de 1274px. En el CSS las medidas se escriben
// con la unidad "u" (ej: 57u) y se convierten a calc(57 * var(--u)), donde --u escala
// con el ancho de la ventana. Así el layout se mantiene proporcional al diseño original.
const unidadU = {
  name: 'unidad-u',
  enforce: 'pre',
  transform(code, id) {
    if (!id.split('?')[0].endsWith('.css')) return null
    return code.replace(/(-?\d*\.?\d+)u\b/g, 'calc($1 * var(--u))')
  },
}

export default defineConfig({
  plugins: [unidadU, react()],
})
