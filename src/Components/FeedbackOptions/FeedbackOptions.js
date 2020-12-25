import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  let keyRender = [];
  for (let key in options) {
    keyRender.push(
      <button
        name={key}
        type="button"
        onClick={onLeaveFeedback}
        key={key}
        className={s.btn}
      >
        {key[0].toUpperCase(0) + key.slice(1)}
      </button>,
    );
  }

  return <div>{keyRender}</div>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
