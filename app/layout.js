import { Mulish, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const mulish = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Strontium | The Social media for developers, founders & enterpreneurs",
  description: "Scroll through code snippets and fact and get smarter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>{children}</body>
    </html>
  );
}
