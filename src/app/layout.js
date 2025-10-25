import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Wanderlust Travel Hub",
  description: "Travel Agency, Tours and Travel",
  icons: {
    icon: "images/wanderlust.webp",
  },
};

export const viewport = {
  themeColor: "#F8FAFC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
         <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Shared styles for all toasts
            style: {
              background: "#1f2937", // e.g., Tailwind's gray-800
              color: "#fff",         // white text
              fontWeight: "500",
              fontSize: "14px",
              border: "1px solid #374151", // border gray-700
              padding: "12px 16px",
              borderRadius: "10px",
            },
            success: {
              iconTheme: {
                primary: "#10b981", // green-500
                secondary: "#ecfdf5", // green-50
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444", // red-500
                secondary: "#fee2e2", // red-100
              },
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
