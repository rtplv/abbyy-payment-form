import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Quantity.scss';

import { FormRow } from 'components/ui';

class PaymentQuantity extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <FormRow className="payment-repeat-quantity"
               title="Кол-во">
        <div className="payment-repeat-quantity__options">
          <div className="payment-repeat-quantity__option">
            <input type="radio"
                   name="quantity"
                   id="unlimitedQty" />
            <label htmlFor="unlimitedQty">
              неограничено
            </label>
          </div>

          <div className="payment-repeat-quantity__option">
            <input type="radio"
                   name="quantity"
                   id="limitedQty" />

            <input className="payment-repeat-quantity__limited-by-qty-field"
                    type="text"/>

            <label htmlFor="limitedQty">
              раза
            </label>
          </div>

          <div className="payment-repeat-quantity__option">
            <input type="radio"
                   name="quantity"
                   id="limitedByDateQty" />

            <label htmlFor="limitedByDateQty">
              до
            </label>

            <input className="payment-repeat-quantity__limited-by-date-field"
                   type="date"/>
          </div>
        </div>
      </FormRow>
    );
  }
}

export default PaymentQuantity;
