import { useEffect, useState } from "react";

import thunkLocations, {
  thunkStorageLocations,
} from "../store/loactions/thunklocations";

import { useAppDispatch, useAppSelecor } from "../store/Hooks";

import { openModel } from "../store/loactions/sliceLocations";

type TArea = {
  id: string;
  title: string;
};

type TLocations = {
  id: string;
  title: string;
  areas: TArea[];
};


type TStep = "main" | "governorates" | "areas";

type TFinalData = {
  governorate: string;
  area: string;
};

export default function useLoactions() {
  const dispatch = useAppDispatch();

  const lang = useAppSelecor(state=>state.sliceLanguage.language)

  const {
    dataLocations,
    locations,
    openLocation,
  } = useAppSelecor((state) => state.sliceLocations);




  const [step, setStep] = useState<TStep>("main");

  const [selectedData, setSelectedData] = useState<TFinalData>({
    governorate: "",
    area: "",
  });

  const [areas, setAreas] = useState<TArea[]>([]);




  useEffect(() => {
    dispatch(thunkLocations());
  }, [dispatch]);



  useEffect(() => {
    document.body.style.overflow = openLocation? "hidden": "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openLocation]);


  
  function handleOpenModel() {
  

    setSelectedData({
      governorate: locations.governorate,
      area: locations.area ?? "",
    });

   
    setStep("main");

    dispatch(openModel(true));
  }



  function handelCloseModel() {
  

    setSelectedData({
      governorate: locations.governorate,
      area: locations.area ?? "",
    });

    setStep("main");

    dispatch(openModel(false));
  }


 

  function confirmLocation() {
   

    if (!selectedData.governorate || !selectedData.area) {
      return;
    }

  
    dispatch(thunkStorageLocations({governorate: selectedData.governorate,area: selectedData.area}),
    );

   
    dispatch(openModel(false));

   
    setStep("main");
  }


 

  function handelChoseGover() {
    setStep("governorates");
  }


  function handelMainContent() {
    setStep("main");
  }


  function toCity() {

    const governorate =
      selectedData.governorate ||
      locations.governorate;

    const governorateData = dataLocations.find(
      (el) => el.title === governorate,
    );


    setAreas(governorateData?.areas ?? []);

    setStep("areas");
  }

  function handelSelectGovernorate(city: TLocations) {

    setAreas(city.areas);

  

    setSelectedData({
      governorate: city.title,

      area: "",
    });
    setStep("areas");
  }


  function handleFinsh(el: { id?: string; title: string }) {


    setSelectedData((prev) => ({
      ...prev,
      area: el.title,
    }));


    setStep("main");
  }


  return {
    locations,
    dataLocations,
    openLocation,
    step,
    areas,
    selectedData,
    lang,
    handleOpenModel,
    handelCloseModel,
    confirmLocation,
    handelChoseGover,
    handelMainContent,
    toCity,
    handelSelectGovernorate,
    handleFinsh,
  };
}
