import { Component } from 'react';
import { ButtonsContainer, Button } from './FeedbackStyled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const keys = Object.keys(this.props.options);
    return (
      <ButtonsContainer>
        {keys.map(key => (
          <Button
            key={nanoid()}
            value={key}
            onClick={this.props.onLeaveFeedback}
            type="button"
          >
            {key}
          </Button>
        ))}
      </ButtonsContainer>
    );
  }
}

FeedbackOptions.propTypes = {
onLeaveFeedback: PropTypes.func.isRequired,
options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
}

