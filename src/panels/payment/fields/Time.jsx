import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormRow } from 'components/ui';

class PaymentTime extends Component {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-form__time"
               title="Время">

      </FormRow>
    );
  }
}

export default PaymentTime;
