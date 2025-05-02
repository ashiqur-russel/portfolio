import localFont from "next/font/local";

export const calsans = localFont({
  src: [
    {
      path: "../public/fonts/Calsans-Regular.woff2", 
      weight: "400",  
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-calsans",
});
