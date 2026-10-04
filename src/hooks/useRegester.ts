import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelecor } from '../store/Hooks';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckEmailAvailable from "../hooks/useChekEmailAvailbalte";
import {
  signUpValidation,
  type TformData,
} from "../vaildation/signUpValidation";
import authThunk from "../store/auth/thunkAuth/thunkAuth";

import toast from "react-hot-toast";

import {  useNavigate } from "react-router-dom";
import { resstUI } from '../store/auth/thunkAuth/authSlice';

export default function useRegester() {
  const [isSending, setIsSending] = useState(false);


   const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resstUI());
    };
  }, [dispatch]);


  const navagite = useNavigate();


    
  const {
    emailAvailableSttus,
    resetEmailCheking,
    enterEmail,
    checkEmailFunction,
  } = useCheckEmailAvailable();


const { loading, error, accessToken } = useAppSelecor((state) => {
    return state.authSlice;
  });


  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<TformData>({
    resolver: zodResolver(signUpValidation),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<TformData> = async (data) => {
    if (isSending) return;

    setIsSending(true);

    const { firstName, lastName, email, password } = data;

    await dispatch(authThunk({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navagite("/lgoin");

        toast.success("تم إنشاء حسابك بنجاح، يرجى تسجيل الدخول", {
          position: "bottom-left",
        });
      })
      .catch(() => {
        setIsSending(false);
      });
  };

  const onBulerHandelerEmail = async (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    const value = e.target.value;
    if (isDirty && !invalid && enterEmail !== value) {
      checkEmailFunction(value);
    }
    if (isDirty && invalid && enterEmail) {
      resetEmailCheking();
    }
  };



  return {errors,isSending,accessToken,onBulerHandelerEmail,onSubmit,register,handleSubmit,emailAvailableSttus,isSubmitting ,loading,
error}

}
