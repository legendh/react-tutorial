import Button from "../Button/Button";
import Card from "../UI/Card/Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal__main"]}>
        <Card className={styles["modal-main__title"]}>
          <h2>{props.title}</h2>
        </Card>
        <Card className={styles["modal-main__content"]}>
          <p>{props.message}</p>
          <Button
            className={styles["modal-main-content__button"]}
            name="Okay"
            onClick={props.onClick}
          />
        </Card>
      </div>
    </div>
  );
};

export default Modal;
