import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Seu E-mail" />
                    <input type="password" placeholder="Sua Senha" />
                    <button className="button" type="submit">Entrar</button>

                    <div className="back-link">
                        <Link className="back-link" to="/cadastro-usuario">
                            <FiLogIn size={16} color="red" />
                        Não tenho Cadastro
                    </Link>
                        <Link className="back-link" to="/nova-senha">
                            <FiLogIn size={16} color="red" />
                        Esqueci minha senha
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
}