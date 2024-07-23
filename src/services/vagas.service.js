import api from './api.js';

export const get_all = (empresaId) => {
    return new Promise((resolve) => {
        api.post("vaga/consulta", {empresaId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_all_to_user = () => {
    return new Promise((resolve) => {
        api.get("vaga/list").then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_all_to_user2 = (indicadorId) => {
    return new Promise((resolve) => {
        api.post("indica/consultaI", {indicadorId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_all_to_user3 = (usuarioId) => {
    return new Promise((resolve) => {
        api.post("indica/consultaU", {usuarioId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}



export const new_wave = (wave) => {
    return new Promise((resolve) => {
        api.post("vaga/nova", wave).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const update_wave = (wave) => {
    return new Promise((resolve) => {
        api.post("vaga/atualiza", wave).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}



export const get_wave = (id) => {
    return new Promise((resolve) => {
        api.post("vaga/busca", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const delete_wave = (id) => {
    return new Promise((resolve) => {
        api.post("vaga/delete", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const indica_wave = (indicacao) => {
    return new Promise((resolve) => {
        api.post("vaga/indicacao", indicacao).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const answer_question = (resposta) => {
    return new Promise((resolve) => {
        api.post("questao/resposta", resposta).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const get_answers_question = (questVagaId, indicacaoId) => {
    return new Promise((resolve) => {
        api.post("questao/usuario", {questVagaId, indicacaoId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}



export const get_questions = (vagaId) => {
    return new Promise((resolve) => {
        api.post("questao/consulta", {vagaId, alvo: 1}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}


export const update_question = (question) => {
    return new Promise((resolve) => {
        api.post("questao/atualiza", question).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}


export const delete_questions = (id) => {
    return new Promise((resolve) => {
        api.post("questao/delete", {id}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}


export const get_candidates = (vagaId) => {
    return new Promise((resolve) => {
        api.post("indica/consultaC", {vagaId}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const altera_fluxo = (id, status) => {
    return new Promise((resolve) => {
        api.post("indica/alteraFluxo", {id, status}).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}



export const add_question = (question) => {
    return new Promise((resolve) => {
        api.post("questao/nova", question).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });  
}

export const upload_capa_picture = (file, vagaId) => {

    const formData = new FormData();
    formData.append("arquivo", file);
    formData.append("vagaId", vagaId);
    return new Promise((resolve) => {
        api.post("vaga/upload", formData).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            resolve(err.response.data || {message:"Erro desconhecido!"});
        })
    });
}

