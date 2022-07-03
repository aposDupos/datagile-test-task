import {Button} from "../Button/Button";
import styles from './Counter.module.scss'
import {useDispatch} from "react-redux";
import {decrement, increment, removeCounter} from "../../store/slices/counterSlice";
import {memo, useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const Counter = ({counter: {id, value, isSelfIncrementing}}) => {
    const dispatch = useDispatch()

    const [incrementInterval, setIncrementInterval] = useState()
    const [isVisible, setVisible] = useState(false)
    const incrementHandler = () => {
        dispatch(increment(id))
    }
    const decrementHandler = () => {
        dispatch(decrement(id))
    }
    const removeCounterHandler = () => {
        clearInterval(incrementInterval)
        dispatch(removeCounter(id))
    }

    useEffect(() => {
        if (isSelfIncrementing) {
            const interval = setInterval(incrementHandler, 1000)
            setIncrementInterval(interval)
        } else {
            clearInterval(incrementInterval)
        }
        return () => {
            clearInterval(incrementInterval)
        }
    }, [isSelfIncrementing])

    useEffect(() => {
        setVisible(true)
        return () => setVisible(false)
    }, [])
    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0,
            y: 100
        }
    }
    return (
        <motion.div>
            <AnimatePresence>
                {isVisible && <motion.div variants={variants} initial={'exit'} animate={'visible'} exit={'exit'}
                                          className={styles.Counter__wrapper}>
                    <div className={`${styles.Counter__main} ${isSelfIncrementing && styles.Counter__main_noBtns}`}>
                        {!isSelfIncrementing &&
                        <Button className={styles.Counter__btn} text={'-'} onClick={decrementHandler}
                                disabled={isSelfIncrementing}/>}
                        <div className={styles.Counter__counterHolder}>{value}</div>
                        {!isSelfIncrementing &&
                        <Button className={styles.Counter__btn} text={'+'} onClick={incrementHandler}
                                disabled={isSelfIncrementing}/>}
                    </div>
                    <Button text={'Удалить'} onClick={removeCounterHandler} className={styles.Counter__removeBtn}/>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default memo(Counter)