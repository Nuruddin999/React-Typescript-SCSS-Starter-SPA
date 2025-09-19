import React, { useState } from "react";
import styles from './App.module.scss';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <main className={styles.app}>
            <header className={styles.app__header}>
                <h1 className={styles.app__title}>⚡ React + TS + SCSS Starter</h1>
                <p className={styles.app__subtitle}>
                    Готов к разработке! Редактируй{" "}
                    <code>App.tsx</code> и <code>App.module.scss</code>.
                </p>
            </header>

            <section className={styles.card}>
                <h2 className={styles.card__title}>Счётчик</h2>
                <p className={styles.card__value}>{count}</p>
                <div className={styles.card__actions}>
                    <button className={styles.btn} onClick={() => setCount(c => c + 1)}>
                        +1
                    </button>
                    <button
                        className={`${styles.btn} ${styles["btn--ghost"]}`}
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
            </section>
        </main>
    );
};

export default App;
