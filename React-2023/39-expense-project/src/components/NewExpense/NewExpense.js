import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDateHandler = (enteredExpenseData) => {
    
    const expeneseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
    }
    
    props.onAddExpense(expeneseData);
  }  
  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {onSaveExpenseDateHandler} />
  </div>;
};

export default NewExpense;
