import { render, useState } from 'fre';
import styles from './app.module.css';

function App() {
  const [count, setCount] = useState(0)
  return <>
      <h1 class={styles.text}>{count}</h1>
      <button class={styles.button} onClick={() => setCount(count + 1)}>+</button>
    </>
}

render(<App />, document.getElementById('app'));