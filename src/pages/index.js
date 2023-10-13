import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/componets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
    </main>
  );
}
