import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Quantity.scss';

import { FormRow, Option } from 'components/ui';

class PaymentQuantity extends PureComponent {
  static propTypes = {};

  state = {
    limitType: 'unlimited',
  };

  render() {
    const { limitType } = this.state;

    return (
      <FormRow className="payment-repeat-quantity"
               title="Кол-во">
        <div className="payment-repeat-quantity__options">
          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="unlimited"
                  checked={limitType === 'unlimited'}
                  onCheck={this.handleOptionChecked}>
            неограничено
          </Option>

          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="byQty"
                  checked={limitType === 'byQty'}
                  onCheck={this.handleOptionChecked}>
            <input className="payment-repeat-quantity__limited-by-qty-field"
                    type="text"/>

            раза
          </Option>

          <Option className="payment-repeat-quantity__option"
                  name="quantity"
                  value="byDate"
                  checked={limitType === 'byDate'}
                  onCheck={this.handleOptionChecked}>
            до

            <input className="payment-repeat-quantity__limited-by-date-field"
                   type="date"/>
          </Option>
        </div>
      </FormRow>
    );
  }

  handleOptionChecked = e => {
    this.setState({
      limitType: e.target.value,
    })
  }
}

export default PaymentQuantity;
