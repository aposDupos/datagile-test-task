import {Header} from "./components/Header/Header";
import styles from './styles/App.module.scss'
import {useSelector} from "react-redux";
import Counter from "./components/Counter/Counter";
import {motion} from "framer-motion";

const App = () => {
    const {counters} = useSelector(state => state.counter)
    return (
        <div className={styles.App}>
            <Header/>
            <main className={styles.App__main}>
                {
                    Object.keys(counters).map(key => {
                        return <Counter key={key} counter={counters[key]}/>
                    })
                }
            </main>
            <footer className={styles.App__footer}>
                <motion.a
                    whileTap={{scale: .9}}
                    href={'https://hh.ru/resume/91e604a5ff0983cd490039ed1f64667a50796a'}
                    target={"_blank"}
                >
                    <h1>Тыртычный Владислав</h1>
                </motion.a>
            </footer>
        </div>
    );
}

export default App;
