import ExpenseItem from "./components/ExpenseItem";
import React, { useEffect, useState } from "react";
import Controller from "./Controller";
import "./App.css";

function App() {

  const [zaznamy, setZaznamy] = useState([]);

  useEffect(() => {
    Controller.getZaznamy().then((response) => {
      setZaznamy(response.data);
    });
  },[]);

  return (
    <div>
      <h2>Let's get started!</h2>
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
