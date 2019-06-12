import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Submit.scss';

import { FormRow } from 'components/ui';

class PaymentSubmit extends PureComponent {
  static propTypes = {
    dates: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
  };

  render() {
    return (
      <FormRow className="payment-repeat-submit"
               title="Сработает">

        <button className="ui-button payment-repeat-submit__button"
                onClick={this.handleFormSubmit}
                type="submit">Сохранить</button>
      </FormRow>
    );
  }

  handleFormSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  }
}

export default PaymentSubmit;
