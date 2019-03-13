import React from 'react'
import ReactDOM from 'react-dom'

import Parrot from 'components/Parrot'

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <p>
          Default Parrot<br />
          <Parrot />
        </p>

        <p>
          HD Parrot<br />
          <Parrot hd />
        </p>

        <p>
          Parrot with a name<br />
          <Parrot name="schnitzel" />
        </p>
      </>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
