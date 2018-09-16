import React, {Component, Fragment} from 'react';
import './App.css';
import Players from './Players';

class App extends Component {

    state = {
        players: [],
    };

    componentDidMount() {
        fetch('/data/players.json')
            .then(response => response.json())
            .then(players => this.setState({players}));
    };

    render() {
        return <Fragment>
            <Players players={this.state.players}/>
        </Fragment>
    }
}

export default App;