import React from 'react'
import PropTypes from 'prop-types'


function Button({children, color, type, isDisabled}) {
  return (
    <button type={type} disabled = {isDisabled} className={`btn btn-${color} `}>
        {children}
      
    </button>
  )
}

Button.defaultProps = {
    color: "primary",
    type: "button",
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    isDisabled: PropTypes.bool

}
export default Button
