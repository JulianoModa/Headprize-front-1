import api from './api.js';

export const get_idiomas_by_user = (usuarioId) => {

    return new Promise((resolve) => {
        api.post("idioma/cv", {usuarioId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const add_idioma_by_user = (exp, userid) => {

    return new Promise((resolve) => {
        api.post("idioma/nova", {...exp, usuarioId:userid}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const delete_idioma_by_user = (id) => {

    return new Promise((resolve) => {
        api.post("idioma/delete", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const update_idioma_by_user = (exp) => {

    return new Promise((resolve) => {
        api.post("idioma/atualiza", exp).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}