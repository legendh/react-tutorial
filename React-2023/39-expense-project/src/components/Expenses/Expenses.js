import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpensesByYear = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearSelectHandler={filteredYear}
      />
      <ExpensesChart expenses = {filteredExpensesByYear} />
      <ExpensesList items={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
