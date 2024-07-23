import { LinkedInCallback } from 'react-linkedin-login-oauth2';

import Home from "./pages/Institucional/Home";
import Contact from './pages/Institucional/Contact';
import Artigos from './pages/Institucional/Blog';
import ProfileCompany from './pages/Users/ProfileCompany';
import MyProfilePeople from './pages/Users/MyProfilePeople';
import MyProfileCompany from './pages/Users/MyProfileCompany';
import ProfilePeople from './pages/Users/ProfilePeople';
import Register from './pages/Institucional/Register';
import Login from './pages/Institucional/Login';
import Vagas from './pages/Waves/Vagas';
import NewWave from './pages/Waves/NewWave';
import Wave from './pages/Waves/Wave';
import RegisterWave from './pages/Waves/Register';
import Candidates from './pages/Waves/Candidates';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/fale-conosco",
    component: Contact
  },
  {
    path: "/artigos",
    component: Artigos
  },
  {
    path: "/empresa",
    component: MyProfileCompany
  },

  {
    path: "/pessoa-fisica",
    component: MyProfilePeople
  },
  {
    path: "/empresa/:id",
    component: ProfileCompany
  },

  {
    path: "/pessoa-fisica/:id",
    component: ProfilePeople
  },
  {
    path: "/cadastro",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/vagas",
    component: Vagas
  },
  {
    path: "/linkedin",
    component: LinkedInCallback
  },
  {
    path: "/vaga/:id/editar",
    component: NewWave
  },
  {
    path: "/vaga/:id",
    component: Wave
  },
  {
    path: "/candidatos/:id",
    component: Candidates
  },
  {
    path: "/nova-vaga",
    component: RegisterWave
  }
];

export default routes;
