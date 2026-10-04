import { useAppSelecor } from "../../store/Hooks";
import { Navigate } from "react-router-dom";

export default function CheckoutProtected({
  children,
}: {
  children: React.ReactNode;
}) {
  const { items } = useAppSelecor((state) => state.cartSlice);
  if (Object.keys(items).length === 0) {
    return <Navigate to="/" />;
  }

  return children;
}
