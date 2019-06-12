import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Time.scss';

import { FormRow } from 'components/ui';

class PaymentTime extends PureComponent {
  static propTypes = {
    timeValue: PropTypes.string,
    onChange: PropTypes.func,
  };

  render() {
    const { timeValue } = this.props;

    return (
      <FormRow className="payment-repeat-time"
               title="Время">
        <input className="payment-repeat-time__field"
               type="time"
               value={timeValue}
               onChange={this.handleTimeChange} />
        <span className="payment-repeat-time__description">
          (+4 UTC, время московское)
        </span>
      </FormRow>
    );
  }

  handleTimeChange = e => {
    const { value } = e.target;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
}

export default PaymentTime;
