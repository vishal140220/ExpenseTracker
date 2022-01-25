import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";

function App() {
	const DUMMY_EXPENSES = [
	];
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expense) => {
		//console.log("in app.js");
		//console.log(expense);
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	return (
		<div className="App">
			<NewExpense onAddExpenses={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
