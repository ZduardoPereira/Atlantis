import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';
import { adicionarAcomodacao } from './componentes/modelos/armazem';
import DiretorSolteiroMais from './componentes/diretores/diretorSolteiroMais';
import DiretorFamiliaSimples from './componentes/diretores/diretorFamiliaSimples';
import DiretorFamiliaMais from './componentes/diretores/diretorFamiliaMais';
import DiretorFamiliaSuper from './componentes/diretores/diretorFamiliaSuper';
import DiretorSolteiroSimples from './componentes/diretores/diretorSolteiroSimples';
import DiretorCasalSimples from './componentes/diretores/diretorCasalSimples';
import Cliente from './componentes/modelos/cliente';
import Endereco from './componentes/modelos/endereco';
import Documento from './componentes/modelos/documento';
import { adicionarCliente } from './componentes/modelos/armazem';

const inicializarAcomodacoes = () => {
    let diretor = new DiretorSolteiroSimples();
    adicionarAcomodacao(diretor.construir());

    diretor = new DiretorSolteiroMais();
    adicionarAcomodacao(diretor.construir());

    diretor = new DiretorCasalSimples();
    adicionarAcomodacao(diretor.construir());

    diretor = new DiretorFamiliaSimples();
    adicionarAcomodacao(diretor.construir());

    diretor = new DiretorFamiliaMais();
    adicionarAcomodacao(diretor.construir());

    diretor = new DiretorFamiliaSuper();
    adicionarAcomodacao(diretor.construir());
};

const inicializarClientes = () => {
    const titular1 = new Cliente(
        "Lucas Fernandes",
        "Lucas",
        new Date(1992, 4, 20)
    );
    const endereco1 = new Endereco(
        "Rua Primavera",
        "Jardim das Flores",
        "São Paulo",
        "SP",
        "Brasil",
        "04567-123"
    );
    const documento1 = new Documento("321654987", "CPF", new Date(2015, 11, 5));
    titular1.Endereco = endereco1;
    titular1.Documento = documento1;
    titular1.Telefone = "11998765432";
    adicionarCliente(titular1);

    const titular2 = new Cliente(
        "Fernanda Oliveira",
        "Fernanda",
        new Date(1985, 8, 14)
    );
    const endereco2 = new Endereco(
        "Avenida Central",
        "Centro",
        "Rio de Janeiro",
        "RJ",
        "Brasil",
        "20031-170"
    );
    const documento2 = new Documento("456789123", "CPF", new Date(2020, 7, 10));
    titular2.Endereco = endereco2;
    titular2.Documento = documento2;
    titular2.Telefone = "21965432187";
    adicionarCliente(titular2);

    const dependente1 = new Cliente(
        "Mariana Fernandes",
        "Mariana",
        new Date(2015, 6, 12)
    );
    const documentoDependente1 = new Documento("112233445", "RG", new Date(2021, 9, 2));
    dependente1.Endereco = endereco1;
    dependente1.Documento = documentoDependente1;
    dependente1.Telefone = "11998765432";
    dependente1.Titular = titular1;
    adicionarCliente(dependente1);

    const dependente2 = new Cliente(
        "Pedro Oliveira",
        "Pedro",
        new Date(2018, 3, 25)
    );
    const documentoDependente2 = new Documento("556677889", "RG", new Date(2023, 2, 15));
    dependente2.Endereco = endereco2;
    dependente2.Documento = documentoDependente2;
    dependente2.Telefone = "21965432187";
    dependente2.Titular = titular2;
    adicionarCliente(dependente2);
};

inicializarAcomodacoes();
inicializarClientes();

ReactDOM.render(
    <React.StrictMode>
        <Roteador />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
