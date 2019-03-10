import React from 'react'
import PropTypes from 'prop-types'

const parrots = require.context('../../../parrots')

const parrotExists = (name) => true // todo

const getParrotPath = (name, hd) => `./${hd ? 'hd/' : ''}${name}parrot.gif`

class Parrot extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hd: PropTypes.bool,
  }

  static defaultProps = {
    hd: false,
  }

  render() {
    const {
      name,
      hd,
    } = this.props

    const parrotPath = getParrotPath(name, hd)

    if (!parrotExists(name)) {
      throw new Error('The parrot you requested doesn\'t exist.')
    }

    return (
      <>
        <img src={parrots.resolve(parrotPath)} alt={`${name}parrot`} />
      </>
    )
  }
}

export default Parrot
