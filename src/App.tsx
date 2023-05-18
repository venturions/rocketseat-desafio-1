import { Header } from "./Components/Header";
import styles from "./App.module.css";

import "./global.css";
import { NewTaskBar } from "./Components/NewTaskBar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NewTaskBar />
        </div>
      </div>
    </>
  );
}

export default App;
