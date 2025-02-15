import { getCategoriesWithProducts } from "@/actions/categories";
import ProductPageComponent from "./page-component";
import { getProductsWithCategories } from "@/actions/products";
async function Products() {
  const categories = await getCategoriesWithProducts();
  const productsWithCategories = await getProductsWithCategories();

  return (
    <ProductPageComponent
      categories={categories}
      productsWithCategories={productsWithCategories}
    />
  );
}

export default Products;
