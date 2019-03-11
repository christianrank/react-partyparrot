import React from 'react'
import ReactDOM from 'react-dom'

import Parrot from 'components/Parrot'

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Parrot name="schnitzel" />
      </>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
