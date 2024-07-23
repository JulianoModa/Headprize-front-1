import api from './api.js';

export const get_artigos = async () => {
    const response = await api.get("/artigos");
    return response.data;
}