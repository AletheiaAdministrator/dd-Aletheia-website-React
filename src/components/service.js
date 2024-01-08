import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-container ${props.rootClassName} `}>
      <span className="service-text">{props.Service}</span>
      <span className="service-text1">{props.Description}</span>
    </div>
  )
}

Service.defaultProps = {
  rootClassName: '',
  Service: 'What is your service?',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Service.propTypes = {
  rootClassName: PropTypes.string,
  Service: PropTypes.string,
  Description: PropTypes.string,
}

export default Service
