import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../customHooks/GlobalContext';
import Input from './Input';
import '../App.css';
import imgEstude from '../img/lendo.png';
import styles from '../css/Home.module.css';
import Header from './Header';

const Home = () => {
  const { pesquisa, setPesquisa, users, ativo } = React.useContext(GlobalContext);


  return (
    <div>
      <Header/>
      <nav className={styles.nav + ' animeLeft'}>
        <ul>
          <li>Programação</li>
          <li>Design</li>
          <li>DataSciense</li>
          <li>Analise de sistemas</li>
          <li>Computação gráfica</li>
          <li>Mobile</li>
        </ul>
      </nav>

      <section className={styles.content  + ' animeLeft'}>
        <img src={imgEstude} alt="estude" />
        <div className={styles.txt}>
          <h2>Cadastre-se</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugiat explicabo ab consequatur quasi nulla accusamus officia quia,
            sunt, aliquid minima eius laboriosam ullam impedit. Magni vitae
            similique accusamus sequi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Earum quibusdam, temporibus numquam totam qui et
            amet vero delectus, ratione cumque unde optio omnis reiciendis
            labore laboriosam ea aperiam sint? Quam.
          </p>
        </div>
      </section>

      <section className={styles.planos + ' animeLeft'}>
        <div className={styles.basico}>
          <h2>Basico</h2>
          <div className={styles.preco}>
            <p className={styles.p1}>12X</p>
            <p className={styles.p2}>R$ 12,49</p>
          </div>
          <p className={styles.p3}>R$ 149,90</p>
          <ul>
            <li>Accesso vitalício</li>
            <li>Todos as aulas disponíveis</li>
            <li>Repositório das aulas</li>
            <li>Suporte 24 horas</li>
            <li>Curso de linguas</li>
          </ul>
          <button>COMPRAR</button>
        </div>

        <div className={styles.avancado}>
          <h2>Avancado</h2>
          <div className={styles.preco }>
            <p className={styles.p1}>12X</p>
            <p className={styles.p2}>R$ 16,65</p>
          </div>
          <p className={styles.p3}>R$ 199,90</p>
        
          <ul>
            <li>Accesso vitalício</li>
            <li>Todos as aulas disponíveis</li>
            <li>Repositório das aulas</li>
            <li>Suporte 24 horas</li>
            <li>Curso de linguas</li>
          </ul>
          <button>COMPRAR</button>
        </div>

        <div className={styles.medio}>
          <h2>Intermediario</h2>
          <div className={styles.preco }>
            <p className={styles.p1}>12X</p>
            <p className={styles.p2}>R$ 14,99</p>
          </div>
          <p className={styles.p3}>R$ 179,90</p>
          <ul>
            <li>Accesso vitalício</li>
            <li>Todos as aulas disponíveis</li>
            <li>Repositório das aulas</li>
            <li>Suporte 24 horas</li>
            <li>Curso de linguas</li>
          </ul>
          <button>COMPRAR</button>
        </div>
      </section>


      <footer className={styles.footer + ' animeLeft'}>
        <p>Lorem © Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
