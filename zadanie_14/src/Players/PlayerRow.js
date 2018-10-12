import React, {Component, Fragment} from 'react';

class PlayerRow extends Component {

    onRemoveButtonClick = () => {
        this.props.onRemove(this.props.id)
    };

    render() {
        const {player} = this.props;
        return <Fragment>
            <tr className={this.props.className}>
                <td>{player.username}</td>
                <td>{player.points}</td>
                <td>
                <button onClick={() => this.onRemoveButtonClick(player.id)}>x</button>
                </td>
            </tr>
        </Fragment>
    }
}

export default PlayerRow;