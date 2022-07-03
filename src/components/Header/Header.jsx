import {Button} from "../Button/Button";
import styles from './Header.module.scss'
import {useDispatch} from "react-redux";
import {addCounter} from "../../store/slices/counterSlice";

export const Header = () => {
    const dispatch = useDispatch()
    const addCounterHandler = () => {
        dispatch(addCounter())
    }
    return (
        <div className={styles.Header__wrapper}>
            <div className={styles.Header__heading}>Тестовое задание для Датаджайл</div>
            <Button text={'Добавить счетчик'} onClick={addCounterHandler} className={styles.Header__btn}/>
        </div>
    )
}