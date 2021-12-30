import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log("expenses.js " + selectedYear);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	console.log(filteredExpenses);
	let ExpenseContent = <p>No expenses found.</p>;
	if (filteredExpenses.length > 0) {
		ExpenseContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}
	return (
		<div>
			<div className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{ExpenseContent}
			</div>
		</div>
	);
}

export default Expenses;
