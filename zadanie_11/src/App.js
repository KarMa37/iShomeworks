import React, {Component, Fragment} from 'react';
import './App.css';
import Players from './players';

class App extends Component {
    render() {
        return <Fragment>
            <h1>Players</h1>
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </Fragment>
    }
}

export default App;