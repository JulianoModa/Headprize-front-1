import api from './api.js';

export const get_experiencias_by_user = (usuarioId) => {

    return new Promise((resolve) => {
        api.post("experiencia/cv", {usuarioId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const add_experiencia_by_user = (exp, userid) => {

    return new Promise((resolve) => {
        api.post("experiencia/nova", {...exp, usuarioId:userid}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const delete_experiencia_by_user = (id) => {

    return new Promise((resolve) => {
        api.post("experiencia/delete", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const update_experiencia_by_user = (exp) => {

    return new Promise((resolve) => {
        api.post("experiencia/atualiza", exp).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}