import { useEffect } from "react";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import { cleanUpCategory, thunk } from "../store/categorys/Slicecategorys";

export default function useCategorys() {

    const dispatch = useAppDispatch();
      const { error, loading, recods } = useAppSelecor((state) => {
        return state.sliceCategorys;
      });
        const language = useAppSelecor((state) => state.sliceLanguage.language);

    
      useEffect(() => {
        if (!recods.length) {
          dispatch(thunk());
        }
      }, [dispatch, recods]);
    
      useEffect(() => {
        return () => {
          dispatch(cleanUpCategory());
        };
      }, [dispatch]);
  return ({recods,loading,error,language})
}
