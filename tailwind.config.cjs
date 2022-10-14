/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //poner los archivos a los que les voy a agregar el css
    "index.html", "./src/**/*.jsx" //los dos asteriscos significa que todo lo que este dentro de la carpeta src, y *.jsx, todo lo que tenga ese tipo de archivo


  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
