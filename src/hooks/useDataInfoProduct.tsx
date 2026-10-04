import { useAppSelecor } from "../store/Hooks";
import type { ProductType } from "../types/product";

export default function useDataInfoProduct({
  products,
}: {
  products: ProductType[];
}) {
  const dataCart = useAppSelecor((state) => state.cartSlice.items);

  const { accessToken } = useAppSelecor((state) => state.authSlice);

  const { itemsId } = useAppSelecor((state) => state.sliceWishlist);

  return products.map((el) => ({
    ...el,
    quntity: dataCart[el.id] || 0,
    isliked: itemsId.includes(el.id),
    inCart: dataCart[el.id],
    findUser: accessToken ? true : false,
  }));
}
