import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit, DM_Sans } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${outfit.variable} ${dmSans.variable} font-sans`}>
      <SplashScreen />
      <Component {...pageProps} />
    </div>
  );
}
