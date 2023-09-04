import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map(({ title, amount, date }) => {
        return <ExpenseItem title={title} amount={amount} date={date} />;
      })}
    </Card>
  );
};

export default Expenses;
