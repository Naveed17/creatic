import { Poppins } from "next/font/google";
import ogImage from "@public/static/images/logo.svg";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer } from "@components/base";
console.log(ogImage);
// make og meta tag
export const metadata = {
  metadataBase: new URL("https://creatic-rho.vercel.app/"),
  title: "Creatic",
  description: "WE ARE CREATIVE DESIGN AGENCY",
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "Creatic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatic",
    description: "WE ARE CREATIVE DESIGN AGENCY",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Creatic",
      },
    ],
  },

};
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#101010]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
