import { useState } from "react";

import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

export const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const cancelFormHandler = () => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
};
