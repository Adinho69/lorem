import React from 'react';
import { GlobalContext } from '../customHooks/GlobalContext';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import Input from './Input';
import '../App.css';
import arrowLeft from '../img/leftarrow.svg';
import imgEstude from '../img/lendo.png';
import styles from '../css/Login.module.css';
import { supabase } from '../services/supabase';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Header from './Header';

const Login = () => {
  const { email, setEmail, senha, setSenha, users, ativo, setAtivo } =
    React.useContext(GlobalContext);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: senha,
    });
    if (!error) {
      navigate('/');
    }else{
      toast.error('Email ou senha invalidos')
    }
    
    console.log(error, user);
  }
  
  return (
    <section className={styles.supContent + ' animeLeft'}>
     
      <Header/>
      <section className={styles.content}>
        <div className={styles.p1 + ' animeLeft'}>
          <h1>Login</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                className={styles.email}
                id={'email'}
                label={'Email:'}
                value={email}
                setValue={setEmail}
                required
              />
              <br />
              <Input
                className={styles.senha}
                id={'passaword'}
                label={'Senha:'}
                value={senha}
                setValue={setSenha}
                type="password"
                required
              />
              <br />
              <button type="submit" className={styles.btnLogin}>Login</button>
            
            </form>
          </div>
        </div>

        <div className={styles.p2 + ' animeLeft'}>
          <img src={imgEstude} alt="menino" />
          <h1>Lorem</h1>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Lorem © Todos os direitos reservados</p>
      </footer>
    </section>
  );
};

export default Login;
