import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1/task',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const taskDetails = localStorage.getItem('tasks')

        if(taskDetails){
            const token =  JSON.parse(taskDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)


export const postTask = async (datos) => {
    try {
        return await apiClient.post("/", datos);
    } catch (error) {
        console.error("Error al agregar la tarea:", error);
        return { error: true, message: "Error al agregar la tarea. Por favor, inténtalo de nuevo." };
    }
};


export const getTasks = async () => {
    try {
        const response = await apiClient.get(`/`)
        return response.data.tasks;
    } catch (error) {
        console.error('Error trying to add task:', error);
        return { error: true, message: 'Error trying to add task, please try again later' };
    }
}
