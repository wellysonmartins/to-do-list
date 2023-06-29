import styles from "./styles.module.scss";
import PlusIcon from "../../assets/plus.png";
import { ITasks } from "../../App";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface INav {
  tasks: ITasks[];
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}

const Nav = ({ tasks, setTasks }: INav) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleClick = () => {
    if (newTask.length > 0) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          text: newTask,
          isCompleted: false,
        },
      ]);
    }
  };
  return (
    <nav className={styles.nav}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleClick}>
        <span>Criar</span>
        <img src={PlusIcon} alt="+" />
      </button>
    </nav>
  );
};

export default Nav;
