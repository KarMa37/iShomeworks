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
                <button onClick={this.onRemoveButtonClick}>x</button>
            </tr>
        </Fragment>
    }
}

export default PlayerRow;