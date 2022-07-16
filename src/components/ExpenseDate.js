import './ExpenseDate.css';

function ExpenseDate(props) {
  const fullDate = props.date;
  const noYear = fullDate.substring(fullDate.indexOf('-')+1);
  const noMonth = noYear.substring(noYear.indexOf('-')+1);
  const noDay = noMonth.substring(noMonth.indexOf(' ')+1);

  const yearS = fullDate.substring(0, fullDate.indexOf('-'));
  const monthS = noYear.substring(0, noYear.indexOf('-'));
  const dayS = noMonth.substring(0, noMonth.indexOf(' '));
  const hour = noDay.substring(0, noDay.indexOf(':')+3);

  const newDate = new Date(+(yearS),+(monthS)-1,+(dayS))
  const month = newDate.toLocaleString("sk-SK", { month: "long" });
  const day = newDate.toLocaleString("sk-SK", { day: "2-digit" });
  const year = newDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__year">{hour}</div>
    </div>
  );
}

export default ExpenseDate;
