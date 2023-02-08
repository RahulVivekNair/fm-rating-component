const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        lightBlue: "hsl(213, 20%, 21%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
      },
    },
  },

  plugins: [],
};

module.exports = config;
