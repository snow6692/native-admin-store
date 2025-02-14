import { getCategoriesWithProducts } from "@/actions/categories";
import CategoryPageComponent from "./page-component";

async function Categories() {
  const categories = await getCategoriesWithProducts();
  return <CategoryPageComponent categories={categories} />;
}

export default Categories;
