import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormRow } from 'components/ui';

class PaymentFrequency extends Component {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-form__frequency"
               title="Частота">

      </FormRow>
    );
  }
}

export default PaymentFrequency;
