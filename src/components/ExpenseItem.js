
import "./ExpenseItem.css";
import Controller from '../Controller';
import ExpenseDate  from "./ExpenseDate";
function ExpenseItem(props) {

  return (
    <tr className="expense-item">
      <td>{props.date}</td>
      
        <td className="expense-item__description"><h2>Temperature: {props.temperature}</h2></td>
        <td className="expense-item__description"><h2>Humidity: {props.humidity}</h2></td>
        <td className="expense-item__description"><h2>Water: {props.water}</h2></td>
        <td className="expense-item__price">{props.id}</td>
        <td className="expense-item__price"><button>Delete</button></td>
    
    </tr>
  );
}
export default ExpenseItem;
