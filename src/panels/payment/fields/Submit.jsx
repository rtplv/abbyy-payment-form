import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Submit.scss';

import { FormRow } from 'components/ui';

class PaymentSubmit extends PureComponent {
  static propTypes = {
    dates: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    maxCount: PropTypes.number,
  };

  render() {
    const { dates } = this.props;
    const shortDatesArr = dates.slice(0, 5);

    return (
      <FormRow className="payment-repeat-submit"
               title="Сработает">
        {shortDatesArr.map((date, idx) => (
          <span className="payment-repeat-submit__date"
                key={date + idx}>
            {date}
          </span>
        ))}

        {dates.length >= 6 && <span className="payment-repeat-submit__repeater">-//-//-</span>}

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
