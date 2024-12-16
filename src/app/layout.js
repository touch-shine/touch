import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar1";
import FooterU from "./components/Footer/footerU";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Touch and Shine Auto Detail",
  description: "",
  verification: {
    google: "xB_gZdp_X1KAfIzfUdw94d3i9SSObcpS4CFHgr_b2eo",
  },
};
// google search console code added 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can also explicitly add it like this */}
        <meta
          name="google-site-verification"
          content="xB_gZdp_X1KAfIzfUdw94d3i9SSObcpS4CFHgr_b2eo"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <FooterU />
      </body>
    </html>
  );
}
