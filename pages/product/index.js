import React from 'react'
import Link from "next/link";

const index = ({productId= 200}) => {
  return (
    <>
    <div>
        <Link href={"/product/1"}>
          <h1>Product 1</h1>
        </Link>
        <Link href={"/product/2"}>
          <h1>Product 2</h1>
        </Link>
        <Link href={"/product/3"}>
          <h1>Product 3</h1>
        </Link>
        <Link href={`/product/${productId}`}>
          <h1>Product {productId}</h1>
        </Link>
    </div>
    <Link href={"/"}>
        Go to Home
    </Link>
    </>
  )
}

export default index