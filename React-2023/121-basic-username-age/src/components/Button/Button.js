import styles from './Button.module.css';

const Button = (props) => {
  const classes = `${styles.button} ${props.className}`
  return <div>
    <button className={classes} onClick={props.onClick}>{props.name}</button>
  </div>;
};

export default Button;
