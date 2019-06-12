import React, { PureComponent } from 'react';

import './PaymentRepeatForm.scss';

import {
  PaymentFrequency,
  PaymentQuantity,
  PaymentTime,
  PaymentSubmit,
} from './fields';

class PaymentRepeatForm extends PureComponent {
  render() {
    return (
      <section className="payment-repeat-form">
        <div className="payment-repeat-form__header">
          <h1>Настройка и повтор платежей</h1>
        </div>
        <div  className="payment-repeat-form__body">
          <form onSubmit={this.handleFormSubmit}>
            <PaymentFrequency />
            <PaymentQuantity />
            <PaymentTime />
            <PaymentSubmit />
          </form>
        </div>
      </section>
    );
  }

  handleFormSubmit = e => {
    e.preventDefault();

    console.log('Submit');
  }
}

export default PaymentRepeatForm;
