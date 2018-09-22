import React, {Component, Fragment} from 'react';
import PlayerRow from './PlayerRow';

class Players extends Component {

    state = {
        highlightingColor: "",
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

    handleSubmit = (event) => {
        event.preventDefault();
        const maxId = Math.max.apply(Math, this.props.players.map(player => player.id));
        const newPlayer = {
            id: maxId + 1,
            username: this.state.inputValue,
            points: Math.floor(Math.random() * 201)
        };
        this.setState({
            players: this.props.players.push(newPlayer),
            inputValue: ""
        })
    };

    onChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    };

    removePlayer = id => {
        const newPlayers = this.props.players.filter(player => {
            return player.id !== id
        });
        this.setState({
            players: newPlayers
        })
    };

    render() {
        return <Fragment>
            <h1 className="center">Players</h1>
            <div className="center">
                <button className="red" onClick={this.redColor}>Red</button>
                <button className="blue" onClick={this.blueColor}>Blue</button>
                <button onClick={this.clearColor}>Clear</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.inputValue}/>
                    <button>Add</button>
                </form>
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
                    return <PlayerRow player={player}
                                      className={player.points > 100 ? this.state.highlightingColor : ''}
                                      key={player.id}
                                      onRemove={this.removePlayer}/>
                })}

                <tr>
                    <th>Total</th>
                    <th>{this.props.players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0)}</th>
                </tr>
                <tr>
                    <th>Average</th>
                    <th>{Math.round(this.props.players.reduce((prev, next) => {
                        return prev + next.points
                    }, 0) / this.props.players.length)}</th>
                </tr>
                </tbody>
            </table>
        </Fragment>
    }
}

export default Players;