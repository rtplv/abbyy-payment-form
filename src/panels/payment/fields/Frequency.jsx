import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FormRow } from 'components/ui';

class PaymentFrequency extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-frequency"
               title="Частота">

      </FormRow>
    );
  }
}

export default PaymentFrequency;
