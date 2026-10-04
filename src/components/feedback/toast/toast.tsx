import toast from "react-hot-toast";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const ToastMessage = (text: string, status: boolean) => {
  toast.success(text, {
    duration: 4000,
    position: "bottom-right",

    icon: status ? (
      <FaHeart color="#ea580c" />
    ) : (
      <FaHeartBroken color="#ea580c" />
    ),
    style: {
      background: "#000",
      color: "#fff",
    },

    iconTheme: {
      primary: "#f97316",
      secondary: "#000",
    },
  });
};

export default ToastMessage;
