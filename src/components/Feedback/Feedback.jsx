import React from "react";

const Feedback = ({
  voteData: { good, neutral, bad },
  positiveFeedback,
  totalFeedback,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && <li>Positive: {positiveFeedback}%</li>}
    </ul>
  );
};

export default Feedback;
