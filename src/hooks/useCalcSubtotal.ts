import type { ProductType } from "../types/product";

export default function useCalcSubtotal({allInfoProduct}:{allInfoProduct:ProductType[]}) {

      const subtotal = allInfoProduct.reduce((acc, curr) => {
    const price = curr.price;
    const quntity = curr.quntity;
    if (quntity && typeof quntity === "number") {
      return (acc + price * quntity) as number;
    } else {
      return acc;
    }
  }, 0);

  const allDiscount = allInfoProduct.reduce((acc, curr) => {
    const discount = curr.discount;
    const quntity = curr.quntity;
    if (
      quntity &&
      typeof quntity === "number" &&
      discount &&
      typeof discount === "number"
    ) {
      return acc + discount * quntity;
    } else {
      return acc;
    }
  }, 0);


  return {subtotal,allDiscount}
}
