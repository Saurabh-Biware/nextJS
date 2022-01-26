import Link from "next/link";

function ProductList({ productId }) {
    return (
        <h1>
            <Link href={`/product/${productId}`}>
                <a>Product 1 </a>
            </Link>
        </h1>
    )
}

export default ProductList;