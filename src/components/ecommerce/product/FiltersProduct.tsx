import { useParams } from "react-router-dom";
import { thunk } from "../../../store/categorys/Slicecategorys";
import { useAppDispatch, useAppSelecor } from "../../../store/Hooks";
import { useEffect } from "react";

export default function FiltersProduct() {
  const dispatch = useAppDispatch();
  const { namecategotye } = useParams();
  useEffect(() => {
    dispatch(thunk());
  }, [dispatch]);

  const { recods } = useAppSelecor((state) => {
    return state.sliceCategorys;
  });

  const dataFilters = recods.filter((e) => e.prefix === namecategotye)[0]?.tags;

  return (
    <div>
      <div className=" flex gap-3 items-center my-10 flex-wrap justify-center">
        {dataFilters?.map((ta) => {
          return (
            <button
              className=" px-2 py-1 text-sm lg:text-base rounded-2xl border cursor-pointer border-zinc-400"
              key={ta.id}
            >
              {ta.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
