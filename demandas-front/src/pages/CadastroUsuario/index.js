import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

export default function CadastroUsuario(){
    return (
        <div className="content">
            <section>
                <h1>Cadastro</h1>

                <Link className="back-link" to="/logon">
                    <FiArrowLeft size={16} color="red"/>
                    Voltar
                </Link>
            </section>
            <form className="aaa" action="">
                <div className="dados-pessoais">
                    <input placeholder="Nome" type="text"/>
                    <input placeholder="Nome" type="text"/>
                    <input placeholder="CPF" type="text"/>
                    <input placeholder="CNPJ" type="text"/>
                    <input placeholder="E-Mail" type="Mail"/>
                    <input placeholder="Formação" type="text"/>
                    <input placeholder="Celular" type="text"/>
                    <input placeholder="Telefone" type="text"/>
                </div>
                <div className="endereco">
                    <input placeholder="Endereço" type="text"/>
                    <input placeholder="Número" type="text"/>
                    <input placeholder="Bairro" type="text"/>
                    <input placeholder="Cidade" type="text"/>
                    <input placeholder="Estado" type="text"/>

                </div>
                <div className="a">
                    <input placeholder="RA" type="text"/>
                    <input placeholder="Uiversidade" type="text"/>
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}