import axios from "axios";

export function inicializarAxios() {
  console.error("inicializarAxios", import.meta.env.VITE_API_ENDPOINT);
  if (typeof import.meta.VITE_API_ENDPOINT !== "undefined") {
    axios.defaults.baseURL =  import.meta.env.VITE_API_ENDPOINT;
    console.error("PRODUCTION" +  import.meta.env.VITE_API_ENDPOINT);
  } else {
    axios.defaults.baseURL =  import.meta.env.VITE_API_ENDPOINT;
    console.error("DESARROLLO");
  }
}
