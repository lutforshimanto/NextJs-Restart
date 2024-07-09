import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productid;
    return (
    <div>Detail of product {productId}</div>
  )
}

export default ProductDetail