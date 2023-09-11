import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles["user-list-main"]}>
      {props.data.map((user) => (
        <li key={Math.random(5)} className={styles["user-list-main__sentence"]}>
          <Card>
            {user.userName} is {user.userAge} years old.
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
