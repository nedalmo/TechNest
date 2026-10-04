import ShipItemInCart from "./ShipItemInCart";
import type { ProductType } from "../../../types/product";
type TProductInfo = {
  allInfoProduct: ProductType[];
};
export default function CartItemList({ allInfoProduct }: TProductInfo) {
  return (
    <div>
      {allInfoProduct.map((el) => (
        <ShipItemInCart key={el.id} {...el} />
      ))}
    </div>
  );
}
