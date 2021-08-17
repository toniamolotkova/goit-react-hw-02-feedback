import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li>Total: {total} </li>
      <li> Good feedbacks: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
