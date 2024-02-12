import React from 'react'
import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/login">Iniciar sesión</Link></li>
                    <li><Link to="/registro">Registro</Link></li>
                </ul>
            </nav>
            <h1>Bienvenido a la aplicación de citas médicas</h1>
            {/* Otro contenido de la página de inicio */}
        </div>
    );
}
