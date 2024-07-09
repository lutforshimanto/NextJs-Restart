import React from 'react'
import Link from "next/link";

const index = () => {
  return (
    <>
    <div className='text-3xl'>Blog list!</div>
    <Link href={"/"}>
      Go to Home
    </Link>
    </>
  )
}

export default index