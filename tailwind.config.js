const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"ClashGrotesk"', "sans-serif"],
      },
      colors: {
        "primary-1": "#000000",
        "text-primary": "#FFFFFF",
        "text-secondary": "#8E8E8E",
      },
      fontSize: {
        "inherit-size": "inherit",
        md: "1rem",
      },
      spacing: {
        4.5: "1.125rem",
        5.3: "1.375rem",
        header: "7.875rem",
        headerMob: "7.313rem",
      },
      borderRadius: {
        s: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
      },
      boxShadow: {
        "btn-default":
          "0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #963488 0%, #FC6F32 50%, #FF4A59 100%)",
        "gradient-dark": "linear-gradient(90deg, #000000 -200%, #191E2A 100%)",
        "gradient-dark-overlay":
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%), linear-gradient(90deg, #000000 -200%, #191E2A 100%)",
        "gradient-pink-orange": "linear-gradient(90deg, #B53EA4 0%, #FC6F32 39%, #FF4A59 100%)",
        "gradient-purple-orange": "linear-gradient(90deg, rgba(150, 52, 136, 0.2) 0%, rgba(252, 111, 50, 0.2) 50%, rgba(255, 74, 89, 0.2) 100%)",
      },
    },
    screens: {
      xxs: "640px",
      xs: "768px",
      sm: "1024px",
      hd: "1280px",
      mac: "1440px",
      "hd+": "1600px",
      fhd: "1920px",
      "2k": "2560px",
      "4k": "3840px",
    },
  },
  plugins: [require("tailwind-hamburgers")],
};

export default config;
