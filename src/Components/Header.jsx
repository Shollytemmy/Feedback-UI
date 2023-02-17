import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

    const styles ={
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={styles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
      
    </header>
  )
}

Header.defaultProps= {
    text: "Default UI"
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header
