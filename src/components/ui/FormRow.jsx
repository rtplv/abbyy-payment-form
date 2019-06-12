import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormRow = props => {
  const formRowProps = {
    className: cn(
      'ui-form-row',
      props.className,
    )
  };

  return (
    <article {...formRowProps}>
      <h3 className="ui-form-row__title">{props.title}</h3>
      <div className="ui-form-row__body">
        {props.children}
      </div>
    </article>
  );
};

FormRow.defaultProps = {
  title: 'Выберите значение'
};

FormRow.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default FormRow;
