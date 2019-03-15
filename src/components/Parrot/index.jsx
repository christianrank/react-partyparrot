import React from 'react'
import PropTypes from 'prop-types'

import { getPublicPath } from '../../config/publicPath'

// todo: use preval to determine if a parrot really exists by injecting the folder contents at build time
// const parrots = preval`
//   const fs = require('fs')

//   module.exports = fs.readdirSync('parrots')
// `

const parrotExists = (name) => true // todo

const getParrotPath = (name, hd) => `${getPublicPath()}/parrots/${hd ? 'hd/' : ''}${name}parrot.gif`

class Parrot extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    hd: PropTypes.bool,
  }

  static defaultProps = {
    name: '', // the default parrot's name is just "parrot"
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
      <img src={parrotPath} alt={`${name}parrot`} />
    )
  }
}

export default Parrot
