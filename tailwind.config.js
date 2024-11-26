module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f8f9fa",
        customGreen: "#32B87D",
        customDark: "#2C2D3F",
        customBlue: "#1a76d1",
        customBlueDark: "#1a1dd1",
        orange: "#ff6600",
      },
      backgroundImage: {
        purpleGradient: "linear-gradient(to right, #ff6600, #9146ff)",
      },
    },
  },
  plugins: [],
};
