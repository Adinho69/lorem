import React from 'react';
import useFetch from './useFetch';

export const GlobalContext = React.createContext();

//provider
export const GlobalStorage = ({ children }) => {
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [pesquisa, setPesquisa] = React.useState()
  const [ativo, setAtivo] = React.useState();


  const users = [
    {
      email: 'adryann@gmail.com',
      senha: '1234',
      cadastro: null,
      nome: 'Adryann'
    },
    {
      email: 'rafael@gmail.com',
      senha: '1234',
      cadastro: null,
      nome: 'Rafael'
    },
  ];


  return <GlobalContext.Provider value={{email, setEmail, senha, setSenha, pesquisa, setPesquisa, users, ativo, setAtivo}}>{children}</GlobalContext.Provider>;
};
