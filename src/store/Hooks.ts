import  { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { Rootstate,AppDispatch } from ".";

export const useAppDispatch :()=>AppDispatch = useDispatch;
export const useAppSelecor: TypedUseSelectorHook<Rootstate> = useSelector