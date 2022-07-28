import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styled from "styled-components";
import { Form, Formik } from "formik";
const ExpenseItem = (props) => {
	return (
		<Wrapper>
			<li>
				<Card className="expense-item">
					<div className="expense-item__description">
						<ExpenseDate date={props.date} />
						<h2 className="expense-item-h2">{props.title}</h2>
						<div className="expense-item__price">${props.amount}</div>
					</div>
					<Formik
						initialValues={""}
						onSubmit={(values) => {
							setTitle("kupa");
						}}
					>
						{({ isSubmitting }) => (
							<Form>
								<button type="submit">Change Title</button>
							</Form>
						)}
					</Formik>
				</Card>
			</li>
		</Wrapper>
	);
};

export default ExpenseItem;

const Wrapper = styled.div`
	.expense-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin: 1rem 0;
		background-color: #4b4b4b;
	}

	.expense-item__description {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
		flex-flow: column-reverse;
		justify-content: flex-start;
		flex: 1;
	}

	.expense-item-h2 {
		color: #3a3a3a;
		font-size: 1rem;
		flex: 1;
		margin: 0 1rem;
		color: white;
	}

	.expense-item__price {
		font-size: 1rem;
		font-weight: bold;
		color: white;
		background-color: #40005d;
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 12px;
	}

	@media (min-width: 580px) {
		.expense-item__description {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex: 1;
		}

		.expense-item__description h2 {
			font-size: 1.25rem;
		}

		.expense-item__price {
			font-size: 1.25rem;
			padding: 0.5rem 1.5rem;
		}
	}
`;
