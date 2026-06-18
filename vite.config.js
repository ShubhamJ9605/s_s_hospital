import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        specialities: 'specialities.html',
        doctors: 'doctors.html',
        contact: 'contact.html'
      }
    }
  }
})
