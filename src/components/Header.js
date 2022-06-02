import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header + ' animeLeft'}>
      <Link to="/" className={styles.logo}>
        <h1>Lorem</h1>
      </Link>

      <input placeholder="Pesquisar" type="text" className={styles.search} />

      <ul className={styles.ulHeader}>
        <li className={styles.cursos}>Cursos</li>
        <li>
          <NavLink className={styles.link} to="login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.headerBtn} to="cadastro">
            Assinar
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
