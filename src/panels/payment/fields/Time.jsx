import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Time.scss';

import { FormRow } from 'components/ui';

class PaymentTime extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-time"
               title="Время">
        <input className="payment-repeat-time__field"
               type="time"
               onChange={this.handleTimeChange} />
        <span className="payment-repeat-time__description">
          (+4 UTC, время московское)
        </span>
      </FormRow>
    );
  }

  handleTimeChange = e => {
    const { value } = e.target;
    console.log(value);
  }
}

export default PaymentTime;
