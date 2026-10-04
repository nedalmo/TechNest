import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Sweit({
  showMessage,
  setShowMessage,
}: {
  showMessage: boolean;
  setShowMessage: Dispatch<SetStateAction<boolean>>;
}) {
  const navitage = useNavigate();

  useEffect(() => {
    if (!showMessage) return;

    Swal.fire({
      // icon: "warning",
      title: "سجّل دخولك أولاً",
      text: "يجب تسجيل الدخول أو إنشاء حساب لإضافة المنتجات إلى قائمة المفضلة.",
      showCancelButton: true,
      confirmButtonText: "تسجيل الدخول",
      cancelButtonText: "إنشاء حساب",
      reverseButtons: true,

      confirmButtonColor: "#f97316",
      cancelButtonColor: "#52525b",
    }).then((resl) => {
      setShowMessage(false);
      if (resl.isConfirmed) {
        navitage("/lgoin");
      }
      if (resl.dismiss === Swal.DismissReason.cancel) {
        navitage("/Regester");
      }
    });
  }, [showMessage, setShowMessage]);

  return null;
}
