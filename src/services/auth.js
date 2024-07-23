
import axios from "axios";
import api from './api.js';
import { USUARIO_LOCAL_STIRNG } from "../constant.js";
const createFormParams = (params) => {
    return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
};

export const setarUsuario = (data) => {
  localStorage.setItem(USUARIO_LOCAL_STIRNG, JSON.stringify(data));
}
        
export const handleSuccess = (code) => {
        return new Promise((resolve) => {
            const code_ = code;
            axios.post("https://www.linkedin.com/oauth/v2/accessToken",createFormParams({
              grant_type : 'authorization_code',
              code: code_,
              redirect_uri: "https://orangecode.tech/linkedin",
              client_id : process.env.REACT_APP_LINKEDIN_CLIENT_ID,
              client_secret: process.env.REACT_APP_LINKEDIN_CLIENT_SECRET
            }), {
                headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Origin",
                "Access-Control-Allow-Origin": "*"
                }, 
              }).then(function (response){
                    resolve(response.data)
                }).catch(err => {
                    resolve(err);
            });
        },
        (error) => {
            console.log("error", error);
        })       
}


export const login = (login_data) => {
    return api.post("auth/conecta", login_data).then(response => {
        if (response.data.accessToken) {
          setarUsuario(response.data)
        }

        return response.data;
      }).catch(err => {
        return err.response.data;
      });
  }

export const  logout = () => {
    localStorage.removeItem(USUARIO_LOCAL_STIRNG);
  }


export const register = (nome, email, pass,tel_celular, linkedin,cpf,data_nasc,telefone) => {
    return api.post("cadastro", {
      nome,
      email,
      pass,
      tel_celular,
      linkedin,
      cpf,
      data_nasc,
      telefone
    });
  }

export const empresa = (nome, email, pass, tel_celular, linkedin, cnpj, descricao, cidade, uf, pais) => {
    return api.post("empresa", {
      nome,
      email,
      pass,
      tel_celular,
      linkedin,
      cnpj,
      descricao,
      cidade,
      uf,
      pais
    });
  }

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(USUARIO_LOCAL_STIRNG));;
  }
