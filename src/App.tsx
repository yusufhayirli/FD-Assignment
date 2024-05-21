import styles from './App.module.css';
import NavigationMenu from './NavigationMenu';

export function App() {
  return (
    <>
      <main className={styles.main}>
        <NavigationMenu />
      </main>
    </>
  );
}
