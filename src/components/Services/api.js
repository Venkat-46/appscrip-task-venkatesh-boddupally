import axios from 'axios';


const apiClient=axios.create({
    baseURL:'https://fakestoreapi.com',
    headers:{
        "content-type":"application/json"
    }
})

apiClient.interceptors.request.use((config)=>{
    return config
},(error)=>Promise.reject(error))


apiClient.interceptors.response.use((response)=>response,(error)=>{
    console.error('API Error:',error)
    return Promise.reject(error)
})

const api={
    getProducts:() => apiClient.get("/products")
};

export default api;