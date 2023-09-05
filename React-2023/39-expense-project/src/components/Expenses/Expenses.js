import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const filteredYear = (year) =>{    
    setSelectedYear(year)
  }
  return (
    <div className="expenses">
    <ExpensesFilter selected = {selectedYear} onYearSelectHandler = {filteredYear} />
    <Card>
      {props.item.map(({ title, amount, date }) => {
        return date.getFullYear() == selectedYear && <ExpenseItem title={title} amount={amount} date={date} />;
      })}
    </Card>
    </div>
  );
};

export default Expenses;
