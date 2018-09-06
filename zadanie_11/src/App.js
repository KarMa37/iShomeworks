import React, {Component, Fragment} from 'react';
import './App.css';
import Players from './players';

class App extends Component {

    render() {

        return <Fragment>
            <h1 className="center">Players</h1>
            <table className="center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {Players.map(player => {
                    return <tr key={player.id}>
                        <td>{player.username}</td>
                        <td>{player.points}</td>
                    </tr>
                })}
                <tr>
                    <th>Total</th>
                    <th>{Players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0)}</th>
                </tr>
                </tbody>
            </table>
        </Fragment>
    }
}

export default App;