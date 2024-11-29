/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css';
import './BarraNavegacao.css'; // Arquivo CSS separado para estilos adicionais

export default function BarraNavegacao(props) {
    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return null;
        } else {
            return props.botoes.map((valor) => (
                <li key={valor}>
                    <a onClick={(e) => props.seletorView(valor, e)} className="nav-item">
                        {valor}
                    </a>
                </li>
            ));
        }
    };

    return (
        <>
            <nav className={`nav-bar ${props.tema}`}>
                <div className="nav-wrapper blue">
                    <a className="brand-logo logo" href="#">ATLANTIS</a>
                    <a
                        data-target="mobile-menu"
                        className="sidenav-trigger"
                        href="#"
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down nav-menu">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
}
