import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.styles.css';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/portfolio">Портфолио</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;