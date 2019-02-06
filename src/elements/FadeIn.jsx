import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring'

const FadeIn = ({ children }) => {
  const springProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })

  return <animated.div style={springProps}>{children}</animated.div>
}

export default FadeIn

FadeIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
