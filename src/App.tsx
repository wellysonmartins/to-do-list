import styles from "./styles.module.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import { useState } from "react";

export interface ITasks {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <div className={styles.container}>
      <Header />
      <Nav tasks={tasks} setTasks={setTasks} />
      <Section tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
