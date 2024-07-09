"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handlingClick =()=>{
    router.push("/product");
  }
  return (
    <>
      <div className="bg-yellow-100 h-screen">
        <h1 className="text-6xl">
          NextJs Restart!
        </h1>
        <Link href={"/blog"}>
          Go to Blogs
        </Link>
        <br></br>
        <Link href={"/docs"}>
          Go to Docs
        </Link>
        <br></br>
        <Link href={"/about"}>
          Go to About
        </Link>
        <br></br>
        <Link href={"/profile"}>
          Go to Profile
        </Link>
        <br></br>
        <Link href={"/product"}>
          Go to Product
        </Link>
        <div>
          <button className="bg-red-200 text-2xl" onClick={handlingClick}>
            Place order
          </button>
      </div>
      </div>
    </>
  );
}
