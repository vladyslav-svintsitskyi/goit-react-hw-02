import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [voteData, setVoteData] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("feedback"));
    if (saveData !== null) {
      return saveData;
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const updateFeedback = (feedbackType) => {
    setVoteData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setVoteData({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = voteData.good + voteData.neutral + voteData.bad;

  const positiveFeedback = Math.round((voteData.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(voteData));
  }, [voteData]);
  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          voteData={voteData}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
