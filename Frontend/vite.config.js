// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//      proxy :{
//       '/api': 'https://book-store-api-hazel.vercel.app'
//      }
//   },
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        //target: "http://localhost:3000",
         target: "https://book-store-api-hazel.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});