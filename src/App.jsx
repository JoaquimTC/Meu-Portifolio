import { useEffect, useState } from "react";
import "./App.css";

// TODO: troque "#" pelos links reais quando estiverem definidos
const LINKS = {
  github: "https://github.com/JoaquimTC/JoaquimTC.git",
  linkedin: "https://www.linkedin.com/feed/",
  email: "mailto:antoniojoaquimdefreitaslopes@gmail.com"
};

const PROJETOS = [
  {
    nome: "LUMI - A Última Luz",
    tipo: "Jogo de plataforma",
    desc: "Jogo de plataforma feito do zero em Python com Tkinter, com fases, física e sprites próprios.",
    stack: ["Python", "Tkinter"],
    repo: "#", // TODO: link do repositório
  },
  {
    nome: "Pizza Hut | Business Intelligence",
    tipo: "Proposta acadêmica, em desenvolvimento",
    desc: "Plataforma de BI para acompanhar o desempenho de duas unidades da Pizza Hut.",
    stack: ["BI", "Análise de dados"],
    repo: "#", // TODO: link do repositório
  },
];

function useTema() {
  const [tema, setTema] = useState(() => {
    try {
      const salvo = localStorage.getItem("tema");
      if (salvo) return salvo;
    } catch {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch {}
  }, [tema]);

  return [tema, () => setTema((t) => (t === "dark" ? "light" : "dark"))];
}

export default function App() {
  const [tema, alternarTema] = useTema();

  return (
    <>
      <header className="topo">
        <a className="marca" href="#inicio">
          Joaquim
        </a>
        <nav aria-label="Principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
          <button
            className="tema"
            onClick={alternarTema}
            aria-label={`Mudar para modo ${tema === "dark" ? "claro" : "escuro"}`}
          >
            {tema === "dark" ? "Claro" : "Escuro"}
          </button>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-texto">
            <h1>Eu construo coisas e aprendo no caminho.</h1>
            <p>
              Sou Joaquim, estudante de Engenharia da Computação. Gosto de
              aprender rápido, ajudar e transformar ideia em projeto.
            </p>
            <div className="acoes">
              <a className="botao botao-claro" href="#projetos">
                Ver projetos
              </a>
              <a className="botao botao-contorno" href="#contato">
                Falar comigo
              </a>
            </div>
          </div>

          <div className="terminal" role="img" aria-label="Terminal com apresentação resumida">
            <div className="terminal-barra">
              <span /><span /><span />
            </div>
            <pre>
              <code>
                <span className="l" style={{ "--i": 0 }}><b>$</b> whoami</span>
                <span className="l saida" style={{ "--i": 1 }}>Joaquim, Engenharia da Computação</span>
                <span className="l" style={{ "--i": 2 }}><b>$</b> ls projetos/</span>
                <span className="l saida" style={{ "--i": 3 }}>lumi/  pizza-hut-bi/</span>
                <span className="l" style={{ "--i": 4 }}><b>$</b> cat comunidade.txt</span>
                <span className="l saida" style={{ "--i": 5 }}>Liga de Inteligência Artificial (LIA)</span>
                <span className="l cursor" style={{ "--i": 6 }}><b>$</b> </span>
              </code>
            </pre>
          </div>
        </section>

        <section id="sobre" className="secao sobre">
          <div className="foto" aria-hidden="true">
            {/* TODO: troque pelo <img src="/foto.jpg" alt="Foto de Joaquim" /> */}
            <span>J</span>
          </div>
          <div>
            <h2>Sobre mim</h2>
            <p>
              Estudo Engenharia da Computação na Universidade Ceuma e participo
              da Liga de Inteligência Artificial (LIA). Antes disso, passei por
              Ciências Sociais, o que me ensinou a olhar para as pessoas por trás
              de cada sistema.
            </p>
            <p>
              Aprendo coisas novas com facilidade e gosto de contribuir em
              equipe, como no projeto Lumi, que busca levar energia elétrica a
              áreas sem acesso no Maranhão.
            </p>
          </div>
        </section>

        <section id="projetos" className="secao">
          <h2>Projetos</h2>
          <div className="grade">
            {PROJETOS.map((p) => (
              <article className="cartao" key={p.nome}>
                <p className="tipo">{p.tipo}</p>
                <h3>{p.nome}</h3>
                <p>{p.desc}</p>
                <ul className="stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a href={p.repo}>Ver repositório</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="secao contato">
          <h2>Vamos conversar</h2>
          <p>Me chame por qualquer um destes canais.</p>
          <div className="acoes">
            <a className="botao botao-azul" href={LINKS.github}>GitHub</a>
            <a className="botao botao-azul" href={LINKS.linkedin}>LinkedIn</a>
          <a className="botao botao-azul" href={LINKS.email}><E-mail>E-mail</E-mail></a>
          </div>

        </section>
      </main>

      <footer className="rodape">Joaquim, {new Date().getFullYear()}</footer>
    </>
  );
}
