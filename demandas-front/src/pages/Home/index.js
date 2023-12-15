import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

export default function Home() {
    return (
        <div className="home-container">
            <header>

            </header>

            <div className="corpo">
                
                <div className="filtro-lista">
                    <p>Pesquisar</p>
                    <input type="text"></input>
                    <button type="button">
                        <FiSearch size={18} />
                    </button>

                    <p>Segmento</p>
                    <input type="checkbox" id="a" name="a" value="a"></input>
                    <label> Dev </label><br></br>
                    <input type="checkbox" id="b" name="b" value="b"></input>
                    <label> Dev2 </label><br></br>
                    <input type="checkbox" id="c" name="c" value="c"></input>
                    <label> Dev3 </label><br></br>

                    <p>Status</p>
                    <input type="radio" id="male" name="gender" value="male"></input>
                    <label>Todos</label><br></br>
                    <input type="radio" id="male" name="gender" value="male"></input>
                    <label>asda</label><br></br>
                    <input type="radio" id="male" name="gender" value="male"></input>
                    <label>MaASDasdle</label><br></br>


                </div>
                <div className="header-lista">
                    <h1>5 Demandas Cadastradas</h1>

                    <p>Ordenar por</p>
                    <select name="cars" id="cars">
                        <option value="recente">Mais Recentes</option>
                        <option value="saab">Mais Antigas</option>
                    </select>
                    <Link className="nova-demanda" to="/cadastro-demanda">Nova Demanda</Link>

                </div>
                <div className="listagem-demandas">
                    <div className="demanda">
                        <ul>
                            <li>Site torrent</li>
                            <li>Bruno Reolon</li>
                            <li><strong>Descrição:</strong> criar um site para downloads de jogos torrents</li>
                            <li>20/11/2020</li>
                            <Link className="demanda" to="/demanda">Mais informação</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}