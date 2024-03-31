import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import pageStyles from "./productPage.module.css";
import productStyles from "./product.module.css";
import ProductCapsule from "./productCapsule/ProductCapsule";


function AdminProductsPage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("http://localhost:3000/products"),
  });
  const products = data?.data;

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Failed to load data</span>;
  }

  return (
    <div className={pageStyles.productsGrid}>
      {
        products.map((product: any) => {
          return <ProductCapsule product={product}/>
        })
      }
    </div>
  );
}

export default AdminProductsPage;
