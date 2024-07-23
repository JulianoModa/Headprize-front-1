import api from './api.js';

export const get_formacao_by_user = (usuarioId) => {

    return new Promise((resolve) => {
        api.post("formacao/cv", {usuarioId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const add_formacao_by_user = (exp, userid) => {

    return new Promise((resolve) => {
        api.post("formacao/nova", {...exp, usuarioId:userid}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const delete_formacao_by_user = (id) => {

    return new Promise((resolve) => {
        api.post("formacao/delete", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const update_formacao_by_user = (exp) => {

    return new Promise((resolve) => {
        api.post("formacao/atualiza", exp).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}