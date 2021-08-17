import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <div className={s.btnWrap}>
      <button className={s.btn} onClick={goodFeedback} type="button">
        Good
      </button>
      <button className={s.btn} onClick={neutralFeedback} type="button">
        Neutral
      </button>
      <button className={s.btn} onClick={badFeedback} type="button">
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
