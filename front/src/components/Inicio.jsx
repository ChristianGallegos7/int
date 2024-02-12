import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <div className="container mx-auto px-4">
            <nav className="py-4">
                <ul className="flex">
                    <li className="mr-4"><Link to="/login" className="text-blue-500 hover:text-blue-700">Iniciar sesión</Link></li>
                    <li><Link to="/registro" className="text-blue-500 hover:text-blue-700">Registro</Link></li>
                </ul>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Bienvenido a la aplicación de citas médicas</h1>
            {/* Otro contenido de la página de inicio */}
        </div>
    );
}

