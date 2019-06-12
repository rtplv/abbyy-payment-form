import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Frequency.scss';

import {
  FormRow,
  Option,
  Calendar
} from 'components/ui';

class PaymentFrequency extends PureComponent {
  static propTypes = {
    type: PropTypes.string,

    weekValue: PropTypes.number,
    monthValue: PropTypes.number,

    onTypeChange: PropTypes.func,
    onWeekValueChange: PropTypes.func,
    onMonthValueChange: PropTypes.func,
  };

  state = {
    datePickerShown: false,
  };

  render() {
    const {
      type,
      weekValue,
      monthValue
    } = this.props;
    const { datePickerShown } = this.state;

    return (
      <FormRow className="payment-repeat-frequency"
               title="Частота">
        <Option className="payment-repeat-frequency__option"
                name="frequency"
                value="weekly"
                checked={type === 'weekly'}
                onCheck={this.handleOptionChecked}>
          <span className="payment-repeat-frequency__label">
            еженедельно в
          </span>

          <select name="weekDay"
                  value={weekValue}
                  onChange={this.handleWeekValueChange}
                  id="weekDay">
            <option value="1">понедельник</option>
            <option value="2">вторник</option>
            <option value="3">среда</option>
            <option value="4">четверг</option>
            <option value="5">пятница</option>
            <option value="6">суббота</option>
            <option value="7">воскресенье</option>
          </select>

        </Option>
        <Option className="payment-repeat-frequency__option"
                name="frequency"
                value="monthly"
                checked={type === 'monthly'}
                onCheck={this.handleOptionChecked}>
          <span className="payment-repeat-frequency__label">
            ежемесячно
          </span>

          <select name="monthQty"
                  onChange={this.handleMonthValueChange}
                  value={monthValue}
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
    if (this.props.onTypeChange) {
      this.props.onTypeChange(e.target.value);
    }
  };

  handleWeekValueChange = e => {
    if (this.props.onWeekValueChange) {
      this.props.onWeekValueChange(
        parseInt(e.target.value, 10)
      );
    }
  };

  handleMonthValueChange = e => {
    if (this.props.onMonthValueChange) {
      this.props.onMonthValueChange(
        parseInt(e.target.value, 10)
      );
    }
  };

  handleShowDatePicker = e => {
    this.setState(state => ({
      datePickerShown: !state.datePickerShown,
    }))
  }
}

export default PaymentFrequency;
