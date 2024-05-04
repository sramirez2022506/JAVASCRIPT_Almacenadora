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
        // Aquí se especifica el endpoint correcto para agregar una nueva tarea
        return await apiClient.post("/", datos);
    } catch (error) {
        console.error("Error al agregar la tarea:", error);
        return { error: true, message: "Error al agregar la tarea. Por favor, inténtalo de nuevo." };
    }
};


export const getTasks = async () => {
    try {
        return await apiClient.get('/');
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        return { error: true, message: 'Error al obtener las tareas. Por favor, inténtalo de nuevo.' };
    }
}
