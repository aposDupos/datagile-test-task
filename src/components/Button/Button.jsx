import {motion} from 'framer-motion'
import styles from "./Button.module.scss"

export const Button = ({text, onClick, className = '', disabled = false}) => {
    const variants = {
        hover: {
            scale: 1.1,
            backgroundColor: '#b190fe'
        },
        tap: {
            scale: .9,
            backgroundColor: '#4200dd'
        },
        transition: {
            duration: .3
        }
    }
  return (
      <motion.button
          onClick={onClick}
          className={`${styles.Button} ${className}`}
          disabled={disabled}
          variants={variants}
          whileHover={'hover'}
          whileTap={'tap'}
      >
          {text}
      </motion.button>
  )
}