import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";


function ProductDetailPage() {
    return (
        <>
            <Navbar>
                <ProductDetail />
            </Navbar>
        </>
    );
}

export default ProductDetailPage;