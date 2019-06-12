import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './PaymentRepeatForm.scss';

import {
  PaymentFrequency,
  PaymentQuantity,
  PaymentTime,
  PaymentSubmit,
} from './fields';

import {
  handleSetFreqType,
  handleSetFreqValue,

  handleSetQtyType,
  handleSetQtyValue,

  handleSetTime,
} from './paymentRepeatFormActions';

class PaymentRepeatForm extends PureComponent {
  static propTypes = {
    // from store
    handleSetTime: PropTypes.func,

    timeValue: PropTypes.string,
  };

  render() {
    const { timeValue } = this.props;

    return (
      <section className="payment-repeat-form">
        <div className="payment-repeat-form__header">
          <h1>Настройка и повтор платежей</h1>
        </div>
        <div  className="payment-repeat-form__body">
          <PaymentFrequency />
          <PaymentQuantity />
          <PaymentTime timeValue={timeValue}
                       onChange={this.handleTimeChange} />
          <PaymentSubmit onSubmit={this.handleFormSubmit}/>
        </div>
      </section>
    );
  }

  handleTimeChange = value => {
    this.props.handleSetTime(value);
  };

  handleFormSubmit = e => {
    console.log('Сохранено.');
  }
}

export default connect(state => ({
  timeValue: state.paymentRepeatForm.timeValue,
}), {
  handleSetTime,
})(PaymentRepeatForm);
