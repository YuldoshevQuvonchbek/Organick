/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      yellowtail: ["Yellowtail"],
    },
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1640px",
        },
      },
      colors: {
        arapawa: "#274c5b", //katte textlarga ishlatiladi
        christmasSilver: " #e0e0e0", //och pushti
        SeaLettuce: "#68a47f", // qishiq yashil
        yellow: "#efd372", //saqiq sifat
        wayt1: "#FFFFFF", //oq
        doctor: "#f9f8f8", //och pushtijga uhshash
        cityRain: "#525c60", //kichik textlarga
        cartColor: "#F9F8F8", //cart bg color
        beluga: " #f1f1f1", //tuq pushti
        peacefulRain: "#f1f8f4",
      },
      backgroundImage: {
        cartImg: "url('./src/assets/img/natural.png')",
        offerImg: "url('./src/assets/img/offer.png')",
      },
    },
  },
  plugins: [],
};
