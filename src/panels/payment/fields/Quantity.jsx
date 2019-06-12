import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Quantity.scss';

import { FormRow, Option } from 'components/ui';

class PaymentQuantity extends PureComponent {
  static propTypes = {
    type: PropTypes.string,

    value: PropTypes.number,
    valueByDate: PropTypes.string,

    onTypeChange: PropTypes.func,
    onChangeValue: PropTypes.func,
    onChangeDateValue: PropTypes.func,
  };

  render() {
    const {
      type,
      value,
      valueByDate,
    } = this.props;

    return (
      <FormRow className="payment-repeat-quantity"
               title="Кол-во">
        <div className="payment-repeat-quantity__options">
          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="unlimited"
                  checked={type === 'unlimited'}
                  onCheck={this.handleOptionChecked}>
            неограничено
          </Option>

          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="byQty"
                  checked={type === 'byQty'}
                  onCheck={this.handleOptionChecked}>
            <input className="payment-repeat-quantity__limited-by-qty-field"
                   value={value}
                   onChange={this.handleValueChange}
                   type="text"/>

            раза
          </Option>

          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="byDate"
                  checked={type === 'byDate'}
                  onCheck={this.handleOptionChecked}>
            до

            <input className="payment-repeat-quantity__limited-by-date-field"
                   value={valueByDate}
                   onChange={this.handleDateValueChange}
                   type="date"/>
          </Option>
        </div>
      </FormRow>
    );
  }

  handleValueChange = e => {
    if (this.props.onChangeValue) {
      const value = e.target.value ? parseInt(e.target.value, 10) : 0;

      this.props.onChangeValue(value);
    }
  };

  handleDateValueChange = e => {
    if (this.props.onChangeDateValue) {
      const value = new Date(e.target.value).getTime();
      this.props.onChangeDateValue(value);
    }
  };

  handleOptionChecked = e => {
    if (this.props.onTypeChange) {
      this.props.onTypeChange(e.target.value);
    }
  };
}

export default PaymentQuantity;
