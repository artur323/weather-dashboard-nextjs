/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      basic: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      medium: { max: "640px" },
      mobile: { max: "430px" },
    },
    extend: {
      backgroundImage: {
        sunny: "url('../../src/assets/img/sunny.jpg')",
        thunderstorm: "url('../../src/assets/img/storm.jpg')",
        rain: "url('../../src/assets/img/rain.jpg')",
        drizzle: "url('../../src/assets/img/drizzle.jpg')",
        snow: "url('../../src/assets/img/snow.jpg')",
        cloud: "url('../../src/assets/img/cloud.jpg')",
      },
    },
  },
  plugins: [],
};
