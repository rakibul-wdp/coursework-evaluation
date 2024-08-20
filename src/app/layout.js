import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coursework Evaluation",
  description: "Coursework Evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#E4ECF3]`}>
        {children}
      </body>
    </html>
  );
}
