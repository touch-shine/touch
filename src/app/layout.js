import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import FooterU from "./components/Footer/footerU";
import { MetadataProvider } from "./components/MetaDataContext";
import Metadata from "./components/Metadata";
import Navbar from "./components/Navbar/Navbar1";
import "./globals.css";

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
  title: " Trusted Auto Detailing Services in Tracy, CA | Touch & Shine Auto Detail",
  description: " Looking for expert auto detailing near Tracy, CA? Touch & Shine Auto Detail delivers premium paint correction, ceramic coating, and mobile detailing with care and precision.",
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
      <Head>
        <meta name="google-site-verification" content="CdZ_IxgmhATd8HZmACAvCcX14xnexgUEb-R-9OcAUww" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Touch and Shine Auto Detail",
            "url": "https://www.touchandshinedetail.com",
            "logo": "https://www.touchandshinedetail.com/images/logo.png",
            "image": "https://www.touchandshinedetail.com/images/logo.png",
            "description": "Professional auto detailing services specializing in exterior, interior detailing, ceramic coating, and paint correction.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1881 Newport Ct.",
              "addressLocality": "Tracy",
              "addressRegion": "CA",
              "postalCode": "95376",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.6837558,
              "longitude": -121.3754412
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-209-914-9052",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/TouchAndShineAutoDetail",
              "https://twitter.com/TouchAndShineAutoDetail",
              "https://www.instagram.com/TouchAndShineAutoDetail"
            ],
            "founder": {
              "@type": "Person",
              "name": "Gabriel Hernandez",
              "jobTitle": "Owner and Lead Detailer",
              "description": "Strategic, multidisciplinary auto detailer with 20+ years of experience."
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Tracy, CA and surrounding areas"
            },
            "review": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Calvin Levy"
              },
              "datePublished": "2024-01-01",
              "reviewBody": "Highly recommend. Gabriel cleaned the entire interior and it looked spotless. I no longer cringe getting into my car. Thanks Gabriel!",
              "name": "5 Star Service"
            }
          })
        }} />



      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><MetadataProvider>
          <Navbar />
          <Metadata />
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
        </MetadataProvider>
      </body>
    </html>
  );
}
