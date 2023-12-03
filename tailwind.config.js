/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        d9d9d9: "#D9D9D9",
        faeed1: "#FAEED1",
      },
      height: {
        "9-5": "9.5rem",
      },
      width: {
        "20": "20%",
        "65": "65%",
        "70": "70%",
        "75": "75%",
        "90": "90%",
        "95": "95%",
        "200": "200%",
        "300": "300%",
      },
    },
  },
  plugins: [],
}