/** @type {import('tailwindcss').Config} */
module.exports = {

  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      miniWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "zxl": "1536",
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f6f2ed",
        primary1: "#dccbe1",
        primary2: "#e0beb1",
        primary3: "#a78571",
        primary4: "#58D647",
        primary5: "#c49e68",
        primary6: "#3c1c0a",
        primary7: "#74b536",
        cardOverlay: 'rgba(256,256,256,0.4)',
        lighttextGray: "#9ca0ab",
        rowBg: "rgba(255, 131,0, 0.05)",
        card: "rgba(25,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
