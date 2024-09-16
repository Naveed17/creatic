import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer } from "@components/base";
// make og meta tag
export const metadata = {
  metadataBase: new URL("https://creatic-rho.vercel.app/"),
  title: "Creatic",
  description: "WE ARE CREATIVE DESIGN AGENCY",
  openGraph: {
    images: "/static/images/banner-img.png",
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
