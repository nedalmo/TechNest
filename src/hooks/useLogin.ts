import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInValidation,
  type TformData,
} from "../vaildation/signInvaildaton";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";

import { useEffect } from "react";
import thunkLogin from "../store/auth/thunkLogin/thunkLogin";
import { resstUI } from "../store/auth/thunkAuth/authSlice";
import { useNavigate } from "react-router-dom";


export default function useLogin() {


      const dispatch = useAppDispatch();
      const navigate = useNavigate();
    
      useEffect(() => {
        return () => {
          dispatch(resstUI());
        };
      }, [dispatch]);
    
      const { loading, error, accessToken } = useAppSelecor((state) => {
        return state.authSlice;
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<TformData>({
        resolver: zodResolver(signInValidation),
        mode: "onBlur",
      });
      const onSubmit: SubmitHandler<TformData> = (data) => {
        dispatch(thunkLogin(data))
          .unwrap()
          .then(() => navigate("/"));
      };
    
    

  return {loading,
error,
accessToken,
       

register,
handleSubmit,
errors,
isSubmitting,
onSubmit,
}

}
