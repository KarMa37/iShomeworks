import React, {Component, Fragment} from 'react';

class Players extends Component {

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

    clearColor = () => {
        this.setState({
            highlightingColor: ""
        })
    };

    render() {
        return <Fragment>
            <h1 className="center">Players</h1>
            <div className="center">
                <button className="red" onClick={this.redColor}>Red</button>
                <button className="blue" onClick={this.blueColor}>Blue</button>
                <button onClick={this.clearColor}>Clear</button>
            </div>
            <table className="center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {this.props.players.map(player => {
                    return <tr className={player.points > 100 ? this.state.highlightingColor : ''} key={player.id}>
                        <td>{player.username}</td>
                        <td>{player.points}</td>
                    </tr>
                })}
                <tr>
                    <th>Total</th>
                    <th>{this.props.players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0)}</th>
                </tr>
                <tr>
                    <th>Average</th>
                    <th>{this.props.players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0) / this.props.players.length}</th>
                </tr>
                </tbody>
            </table>
        </Fragment>
    }
}

export default Players;