import axios from "axios";

export const useTodoService = () => {
    const _ApiKey = "https://748d5349ca65a088.mokky.dev/";
    // ключи от реста
    const _ApiKeyAuth = "todos";

    const getTodos = async (offset = _ApiKeyAuth) => {
        try {
            const res = await axios.get(`${_ApiKey + offset}`)
            return res
        } catch(err) {
            console.log(err)
        }
    }


    return {
        getTodos
    }
}
