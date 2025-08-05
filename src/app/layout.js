import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import {Footer} from "@/components/Footer/Footer";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: "Wanderlust Travel Hub",
  description: "Travel Agency, Tours and Travel",
  icons:{
    icon:"images/wanderlust.png"
  },
};

export const viewport = {
  themeColor: "#F8FAFC"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={poppins.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
