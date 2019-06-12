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
  handleSetFreqMonthValue,
  handleSetFreqWeekValue,

  handleSetQtyType,
  handleSetQtyValue,
  handleSetQtyByMonthValue,

  handleSetTime,
} from './paymentRepeatFormActions';

class PaymentRepeatForm extends PureComponent {
  static propTypes = {
    // from store
    handleSetFreqType: PropTypes.func,
    handleSetFreqMonthValue: PropTypes.func,
    handleSetFreqWeekValue: PropTypes.func,

    handleSetTime: PropTypes.func,

    freqType: PropTypes.string,
    freqMonthValue: PropTypes.number,
    freqWeekValue: PropTypes.number,

    qtyType: PropTypes.string,
    qtyValue: PropTypes.number,
    qtyByMonthValue: PropTypes.number,

    timeValue: PropTypes.string,
  };

  render() {
    const {
      freqType,
      freqMonthValue,
      freqWeekValue,

      timeValue
    } = this.props;

    return (
      <section className="payment-repeat-form">
        <div className="payment-repeat-form__header">
          <h1>Настройка и повтор платежей</h1>
        </div>
        <div  className="payment-repeat-form__body">
          <PaymentFrequency type={freqType}
                            monthValue={freqMonthValue}
                            weekValue={freqWeekValue}
                            onTypeChange={this.handleFreqTypeChange}
                            onMonthValueChange={this.handleFreqMonthChange}
                            onWeekValueChange={this.handleFreqWeekChange} />
          <PaymentQuantity />

          <PaymentTime timeValue={timeValue}
                       onChange={this.handleTimeChange} />

          <PaymentSubmit onSubmit={this.handleFormSubmit}/>
        </div>
      </section>
    );
  }

  handleFreqTypeChange = value => {
    this.props.handleSetFreqType(value);
  };
  handleFreqWeekChange = value => {
    this.props.handleSetFreqWeekValue(value);
  };
  handleFreqMonthChange = value => {
    this.props.handleSetFreqMonthValue(value);
  };

  handleTimeChange = value => {
    this.props.handleSetTime(value);
  };

  handleFormSubmit = e => {
    console.log('Сохранено.');
  }
}

export default connect(state => ({
  freqType: state.paymentRepeatForm.freqType,
  freqMonthValue: state.paymentRepeatForm.freqMonthValue,
  freqWeekValue: state.paymentRepeatForm.freqWeekValue,

  timeValue: state.paymentRepeatForm.timeValue,
}), {
  handleSetFreqType,
  handleSetFreqMonthValue,
  handleSetFreqWeekValue,

  handleSetTime,
})(PaymentRepeatForm);
