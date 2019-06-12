import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Submit.scss';

import { FormRow } from 'components/ui';

class PaymentSubmit extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-submit"
               title="Сработает">

        <button className="ui-button payment-repeat-submit__button"
                type="submit">Сохранить</button>
      </FormRow>
    );
  }
}

export default PaymentSubmit;
