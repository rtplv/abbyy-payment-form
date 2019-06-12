import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Option.scss';

class Option extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    onCheck: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  };

  render() {
    const {
      checked,
      name,
      value,
      className,
      children,
    } = this.props;

    const optionProps = {
      className: cn(
        'ui-option',
        className,
      )
    };

    return (
      <article {...optionProps}>
        <label>
          <input type="radio"
                 name={name}
                 value={value}
                 checked={checked}
                 onChange={this.handleChecked} />
          {children}
        </label>
      </article>
    );
  }

  handleChecked = e => {
    if (this.props.onCheck) {
      this.props.onCheck(e);
    }
  }
}

export default Option;
