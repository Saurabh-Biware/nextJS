import Router, { useRouter } from "next/router";


function ProductDetail(){
    const router = useRouter()

    const productId = router.query.productID
    return <h1>Details : {productId}</h1>
}

export default ProductDetail;