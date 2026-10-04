import { Navigate } from "react-router-dom";
import { useAppSelecor } from "../../store/Hooks";

export default function Protected({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAppSelecor((state) => {
    return state.authSlice;
  });

  if (!accessToken) {
    return <Navigate to="/lgoin" />;
  }
  return children;
}
