import { getCategoriesWithProducts } from "@/actions/categories";
import ProductPageComponent from "./page-component";
async function Products() {
  const categories = await getCategoriesWithProducts();

  return <ProductPageComponent categories={categories} />;
}

export default Products;
