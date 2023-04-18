import { Component } from 'react';
import { ButtonsContainer, Button } from './FeedbackStyled';
import { nanoid } from 'nanoid';

export class FeedbackOptions extends Component {
  render() {
    const keys = Object.keys(this.props.options);
    return (
      <ButtonsContainer>
        {keys.map(key => (
          <Button
            key={nanoid}
            value={key}
            onClick={e => this.props.onLeaveFeedback(e)}
            type="button"
          >
            {key}
          </Button>
        ))}
      </ButtonsContainer>
    );
  }
}