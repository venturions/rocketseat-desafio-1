import { PlusCircle } from "phosphor-react";
import styles from "./NewTaskBar.module.css";

export function NewTaskBar() {
  return (
    <div className={styles.newTaskBar}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
