import React, {Component, Fragment} from 'react';

class PlayerRow extends Component {

    render() {
        const {player} = this.props;
        return <Fragment>
            <tr className={this.props.className}>
                <td>{player.username}</td>
                <td>{player.points}</td>
            </tr>
        </Fragment>
    }
}

export default PlayerRow;