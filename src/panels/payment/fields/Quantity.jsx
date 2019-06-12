import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormRow } from 'components/ui';

class PaymentQuantity extends Component {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-form__quantity"
               title="Кол-во">

      </FormRow>
    );
  }
}

export default PaymentQuantity;
