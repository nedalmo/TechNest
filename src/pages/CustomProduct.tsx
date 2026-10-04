import FiltersProduct from "../components/ecommerce/product/FiltersProduct";
import LinksAndImges from "../components/ecommerce/product/LinksAndImges";
import SideFiltersProduct from "../components/ecommerce/product/SideFiltersProduct";
import Products from "./Products";

export default function CustomProduct() {
  return (
    <div className=" px-2 md:px-4 lg:px-6">
      <LinksAndImges />
      <FiltersProduct />
      <div className="  flex gap-3 items-start">
        <SideFiltersProduct />
        <Products />
      </div>
    </div>
  );
}
