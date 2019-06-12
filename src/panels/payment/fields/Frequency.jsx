import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Frequency.scss';

import {
  FormRow,
  Option,
  Calendar
} from 'components/ui';

class PaymentFrequency extends PureComponent {
  static propTypes = {};

  state = {
    freqType: 'weekly',
    datePickerShown: false,
  };

  render() {
    const {
      freqType,
      datePickerShown
    } = this.state;

    return (
      <FormRow className="payment-repeat-frequency"
               title="Частота">
        <Option className="payment-repeat-frequency__option"
                name="frequency"
                value="weekly"
                checked={freqType === 'weekly'}
                onCheck={this.handleOptionChecked}>
          <span className="payment-repeat-frequency__label">
            еженедельно в
          </span>

          <select name="weekDay"
                  id="weekDay">
            <option value="monday">понедельник</option>
            <option value="tuesday">вторник</option>
            <option value="wednesday">среда</option>
            <option value="thursday">четверг</option>
            <option value="friday">пятница</option>
            <option value="saturday">суббота</option>
            <option value="sunday">воскресенье</option>
          </select>

        </Option>
        <Option className="payment-repeat-frequency__option"
                name="frequency"
                value="monthly"
                checked={freqType === 'monthly'}
                onCheck={this.handleOptionChecked}>
          <span className="payment-repeat-frequency__label">
            ежемесячно
          </span>

          <select name="monthQty"
                  id="monthQty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </Option>
        <div className="payment-repeat-frequency__dates-selector">
          <button className="ui-pseudo-button"
                  onClick={this.handleShowDatePicker}>
            Выбрать даты
          </button>
          {datePickerShown && <Calendar />}
        </div>
      </FormRow>
    );
  }

  handleOptionChecked = e => {
    this.setState({
      freqType: e.target.value,
    })
  };

  handleShowDatePicker = e => {
    this.setState(state => ({
      datePickerShown: !state.datePickerShown,
    }))
  }
}

export default PaymentFrequency;
