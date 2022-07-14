import ExpenseItem from "./components/ExpenseItem";
import React, { useEffect, useState } from "react";
import Controller from "./Controller";
import "./App.css";

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [zaznamy, setZaznamy] = useState([]);

  useEffect(() => {
    Controller.getZaznamy().then((response) => {
      setZaznamy(response.data);
    });
  },[]);

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Sup hoe</p>
      <table className="app-table">
      <thead>
          <tr className="expense-item">
            <td className="expense-item__description"><h2>Date</h2></td>
            <td className="expense-item__description"><h2>Temperature</h2></td>
            <td className="expense-item__description"><h2>Humidity</h2></td>
            <td className="expense-item__description"><h2>Water</h2></td>
            <td className="expense-item__description"><h2>Id</h2></td>
            <td className="expense-item__description"><h2></h2></td>
          </tr>
        </thead>
        <tbody>
          {zaznamy.map((zaznam) => {
            return (
              <ExpenseItem
                key={zaznam.id}
                date={zaznam.date}
                temperature={zaznam.temperature}
                humidity={zaznam.humidity}
                water={zaznam.water}
                id={zaznam.id}
                delete={"Delete"}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
// {expenses.map(zaznam=>(
//   <tr key={zaznam.id}>
//     <td>{zaznam.temperature}</td>
//     <td>{zaznam.humidity}</td>
//     <td>{zaznam.water}</td>
//     <td>{zaznam.date}</td>
//   </tr>
// ))
// }
{
  /* <ExpenseItem
title={expenses[0].title}
amount={expenses[0].amount}
date={expenses[0].date}
></ExpenseItem>
<ExpenseItem
title={expenses[1].title}
amount={expenses[1].amount}
date={expenses[1].date}
></ExpenseItem>
<ExpenseItem
title={expenses[2].title}
amount={expenses[2].amount}
date={expenses[2].date}
></ExpenseItem>
<ExpenseItem
title={expenses[3].title}
amount={expenses[3].amount}
date={expenses[3].date}
></ExpenseItem> */
}
