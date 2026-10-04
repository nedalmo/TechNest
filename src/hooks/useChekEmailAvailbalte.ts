import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "cheking" | "available" | "notAvaliable" | "failed"


const  useChekEmailAvailbalte = ()=>{
    const [emailAvailableSttus,setEmailAvailableStatus] = useState<TStatus>("idle");
    const [enterEmail,setEnterEmail] = useState<null |string>(null);

    const checkEmailFunction  = async (email:string)=>{
        setEmailAvailableStatus("cheking");
        setEnterEmail(email);
        try {
            const requset = await axios.get(`/users?email=${email}`);

            if(!requset.data.length){
                setEmailAvailableStatus("available")
            }else{
                setEmailAvailableStatus("notAvaliable")

            }
            
        } catch (error) {
            setEmailAvailableStatus("failed")
            
        }

    }
    const resetEmailCheking = ()=>{
        setEmailAvailableStatus("idle");
        setEnterEmail(null);
    };


    return {emailAvailableSttus ,enterEmail, resetEmailCheking,checkEmailFunction};


}

export default useChekEmailAvailbalte;