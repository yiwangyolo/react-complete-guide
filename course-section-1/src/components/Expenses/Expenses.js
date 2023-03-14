import { useState } from "react";

import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";

import "./Expenses.css";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterUpdateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterUpdate={filterUpdateHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};
