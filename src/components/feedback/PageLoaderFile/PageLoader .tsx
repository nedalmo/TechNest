import { Lottie } from "lottie-react";
import animationData from "../../../assets/loading.json";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie src={animationData} autoplay loop className="w-64 h-64" />
    </div>
  );
}
