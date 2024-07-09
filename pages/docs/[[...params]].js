import React from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

const Doc = () => {
    const router = useRouter();
    const {params=[]} = router.query

    console.log(params);

    if(params.length === 3){
        return (
            <>
                <h className="text-3xl">Displaying docs for feature {params[0]}, concept {params[1]}, example {params[2]} </h>
                <Link href={"/"}>
                    Go to Home
                </Link>
            </>)
    }else if(params.length === 2){
        return (
            <>
                <h className="text-3xl">Displaying docs for feature {params[0]} and concept {params[1]} </h>
                <Link href={"/"}>
                    Go to Home
                </Link>
            </>)
    }else if(params.length === 1){
        return (
            <>
                <h className="text-3xl">Displaying docs for feature {params[0]}</h>
                <Link href={"/"}>
                    Go to Home
                </Link>
            </>)
    }

  return (
    <>
        <h className="text-3xl">Home page of docs!</h>
        <Link href={"/"}>
            Go to Home
        </Link>
    </>
  )
}

export default Doc