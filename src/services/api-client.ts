import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "a0aa33be282649668db2eed830d765bc"
    }
})