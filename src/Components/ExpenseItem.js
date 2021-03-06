import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	let newTitle = "";
	const changeTitleHandler = (event) => {
		newTitle = event.target.value;
	};
	const clickHandler = () => {
		setTitle(newTitle);
		console.log(title);
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<div className="change-wrapper">
			<input className="title-change" 
			onChange={changeTitleHandler}></input>
			<button className="btn" onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
