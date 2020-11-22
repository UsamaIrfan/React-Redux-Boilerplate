import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import Test from './Comps/Test'
import {set_data} from './store/actions'

class App extends React.Component {
  render() {
    console.log("action==>",this.props)
    return (
      <div className="App">
        <h1>Usama Irfan</h1>
        <button onClick={this.props.set_data}>Set Data</button>
        <Test />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: "Usama Irfan",
  users: state.root.users
})

const mapDispatchToProps = (dispatch) => ({
  set_data: () => {dispatch(set_data())}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
