import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/task',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')

        if(userDetails){
            const token =  JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)

export const postTarea = async(datos) => {

    try {
        return await apiClient.post("/", datos)
    } catch (e) {
        return{
            error: true,
            e
        }
    }

}