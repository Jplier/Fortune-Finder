import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  typeChange() {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <>
      <form id='username' onSubmit={() => {this.props.userSubmit(this.state.username)}}>
        <input type='text' value={this.state.username} onChange={this.typeChange.bind(this)}></input>
        <input type='submit' ></input>
      </form>
      </>
    )
  }
}

export default InputBox;