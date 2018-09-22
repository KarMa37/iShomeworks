import React, {Component, Fragment} from 'react';

class PlayerRow extends Component {

    onRemoveButtonClick = id => {
        this.props.onRemove(id)
    };

    render() {
        const {player} = this.props;
        return <Fragment>
            <tr className={this.props.className}>
                <td>{player.username}</td>
                <td>{player.points}</td>
                <button onClick={this.onRemoveButtonClick(player.id)}>x</button>
            </tr>
        </Fragment>
    }
}

export default PlayerRow;