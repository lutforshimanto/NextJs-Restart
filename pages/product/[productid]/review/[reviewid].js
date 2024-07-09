import React from 'react'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter();
  const {productid, reviewid} = router.query
    return (
    <div>Review {reviewid} for product {productid}</div>
  )
}

export default index