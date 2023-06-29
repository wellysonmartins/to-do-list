import styles from "./styles.module.scss";
import Clipboard from "../../assets/Clipboard.png";
import TrashIcon from "../../assets/trash.png";
import CheckedIcon from "../../assets/Vector.png";
import { ITasks } from "../../App";
import { useState } from "react";

interface ISection {
  tasks: ITasks[];
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}

const Section = ({ tasks, setTasks }: ISection) => {
  const [completedCount, setCompletedCount] = useState(0);

  const handleCancel = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    const count = newTasks.filter((task) => task.isCompleted).length;

    setCompletedCount(count);
    setTasks(newTasks);
  };

  const handleCompleted = (task: ITasks) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          isCompleted: !t.isCompleted,
        };
      }
      return t;
    });

    const count = updatedTasks.filter((task) => task.isCompleted).length;

    setCompletedCount(count);
    setTasks(updatedTasks);
  };

  return (
    <section className={styles.container}>
      <div className={styles.statusBar}>
        <div className={styles.tasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div className={styles.completed}>
          Concluídas{" "}
          <span>
            {completedCount} de {tasks.length}
          </span>
        </div>
      </div>

      {tasks.length > 0 ? (
        <div className={styles.contentWithTasks}>
          {tasks.map((task) => (
            <div className={styles.task} key={task.id}>
              <div
                className={`${styles.taskIsCompleted} ${
                  task.isCompleted ? styles.isCompleted : ""
                }`}
                onClick={() => handleCompleted(task)}
              >
                {task.isCompleted && <img src={CheckedIcon} alt="Concluída" />}
              </div>
              <div className={styles.taskText}>{task.text}</div>
              <div
                className={styles.taskCancel}
                onClick={() => handleCancel(task.id)}
              >
                <img src={TrashIcon} alt="Excluír" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.contentWithoutTasks}>
          <img src={Clipboard} alt="Clipboad" />
          <div className={styles.title}>
            Você ainda não tem tarefas cadastradas
          </div>
          <div className={styles.subtitle}>
            Cria tarefas e organize seus itens a fazer
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
