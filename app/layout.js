import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pix Masonry",
  description:
    "Pix Masonry is a dynamic image sharing and storage platform. Explore a vast collection of images, pin your favorites, and share them with ease. With our unique masonry layout, finding and organizing images has never been easier. You can access a dedicated History page to view all your previously downloaded images and add images to your favorites for quick access. Dive into the world of images with Pix Masonry!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
