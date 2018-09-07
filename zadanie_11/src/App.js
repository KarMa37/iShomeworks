import React, {Component, Fragment} from 'react';
import './App.css';
import Players from './players';

class App extends Component {

    state = {
        highlightingColor: ""
    };

    redColor = () => {
        this.setState({
            highlightingColor: "red"
        })
    };

    blueColor = () => {
        this.setState({
            highlightingColor: "blue"
        })
    };

    render() {
        const arrayId = Players.map(player => {
            return player.id
        });
        const maxId = Math.max(...arrayId);
        return <Fragment>
            <h1 className="center">Players</h1>
            <div className="center">
                <button className="red" onClick={this.redColor}>Red</button>
                <button className="blue" onClick={this.blueColor}>Blue</button>
            </div>
            <table className="center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {Players.map(player => {
                    return <tr className={player.points > 100 ? this.state.highlightingColor : ''} key={player.id}>
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
                <tr>
                    <th>Average</th>
                    <th>{Players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0) / maxId}</th>
                </tr>
                </tbody>
            </table>
        </Fragment>
    }
}

export default App;