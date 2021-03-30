import React from 'react'

const AddNumber = ({onAdd}) => <button onClick={onAdd}>Add a Number!</button>

const Number = ({value}) => <div>The value is {value}</div>

class AddNumbers extends React.Component {

  state = {
    numbers: []
  }

  render() {
      return(
    <div>
      <AddNumber onAdd={ () => {
        this.setState({numbers: [...this.state.numbers, this.state.numbers.length]})}
      } />
      { this.state.numbers.map(n => <Number key={ n } value={ n } />) }
    </div>
      )
  }
}

export default AddNumbers