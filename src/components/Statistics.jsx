import { Component } from "react";
import { StatisticsContainer } from "./FeedbackStyled";
import { nanoid } from "nanoid";


export class Statistics extends Component {
  static defaultProps = {
    stats: { good: 0, bad: 0, neutral: 0 },
    total: 0,
    positiveFeedback: 0,
  };
  render() {
    return (
      <div>
        <StatisticsContainer>
          {Object.entries(this.props.stats).map(([key, value]) => {
            return (
              <span key={nanoid}>
                {key}: {value}
              </span>
            );
          })}
          <span>Total: {this.props.total}</span>
          <span>Positive feedback: {this.props.positiveFeedback}%</span>
        </StatisticsContainer>
      </div>
    );
  }
}

