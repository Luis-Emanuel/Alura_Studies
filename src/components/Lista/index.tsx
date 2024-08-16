import React from "react";
import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [{
    tarefa: "React",
    tempo: "00:15:20"
  }, {
    tarefa: "Angular",
    tempo: "00:25:00"
  }, {
    tarefa: "Git",
    tempo: "01:30:00"
  }]

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li className={style.item} key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
