import api from './api.js';

export const get_base_api = "http://headprize.prolab.inf.br/upload/";


export const register_empresa = (empresa) => {
    return new Promise((resolve) => {
        api.post("empresa/cadastro", empresa).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_empresa = (empresaId) => {
    return new Promise((resolve) => {
        api.post("empresa/busca", {empresaId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_user = (id) => {
    return new Promise((resolve) => {
        api.post("user/get", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  


}

export const att_empresa = (empresa) => {
    return new Promise((resolve) => {
        empresa.empresaId = empresa.id;
        api.post("empresa/atualiza", empresa).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const upload_profile_picture = (file, empresaId) => {

    const formData = new FormData();
    formData.append("arquivo", file);
    formData.append("cat", 1);
    formData.append("empresaId", empresaId);
    return new Promise((resolve) => {
        api.post("empresa/upload", formData).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });
}

export const upload_picture_people = (file, usuarioId, tipo) => {

    const formData = new FormData();
    formData.append("arquivo", file);
    formData.append("cat", tipo);
    formData.append("usuarioId", usuarioId);
    return new Promise((resolve) => {
        api.post("pessoa/upload", formData).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });
}

export const get_porte = () => {
    return new Promise((resolve) => {
        api.get("porte/busca").then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const att = (user) => {
    return new Promise((resolve) => {
        api.post("usuario/atualiza", user).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const valid_invite = (convite, id) => {
    return new Promise((resolve) => {
        api.post("usuario/atualiza", {"id": id,"convite": convite}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const add = (empresa) => {
    return new Promise((resolve) => {
        empresa.empresaId = empresa.id;
        api.post("empresa/atualiza", empresa).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}