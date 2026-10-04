
import { isAxiosError } from "axios"

function axiosErrorHandler(error:unknown) {
       if(isAxiosError(error)){
            return error.response?.data||error.response?.data.message || error.message
        }else{
            return "unexpected data"
        }
        
}

export default axiosErrorHandler