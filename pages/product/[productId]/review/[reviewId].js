import { useRouter } from "next/router";

function Review(){
    const router = useRouter()
    const { productId, reviewId } = router.query;

    return <h1>Riview {reviewId} for {productId}</h1>
}

export default Review;