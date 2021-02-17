import { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(event) {
    const statisticName = event.target.name;

    this.setState(prevState => {
      return {
        ...prevState,
        ...{ [statisticName]: prevState[statisticName] + 1 },
      };
    });
  }

  countTotalFeedback() {
    let totalFeebback = 0;
    for (var key in this.state) {
      totalFeebback += this.state[key];
    }
    return totalFeebback;
  }

  countPositiveFeedbackPercentage(totalFeedback) {
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedback);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivFeedback = this.countPositiveFeedbackPercentage(totalFeedback);
    const { good, neutral, bad } = this.state;
    const showStaristik = good || neutral || bad;
    console.log(showStaristik);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {showStaristik ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
