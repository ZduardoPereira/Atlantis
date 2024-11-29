import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css'; // Arquivo CSS separado

interface HomeProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Home(props: HomeProps) {
    return (
        <div className="home-container">
            <div className="welcome-card">
                <h2 className="welcome-title">Bem-vindo ao sistema Atlantis!</h2>
                <p className="welcome-message">
                    Aqui você poderá gerenciar os clientes e suas hospedagens de forma simples e eficiente.
                </p>
                <p className="instruction">
                    Utilize a barra de navegação acima para acessar as funcionalidades do sistema.
                </p>
            </div>
        </div>
    );
}
