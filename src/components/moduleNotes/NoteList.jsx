import React, {Component} from 'react';

class NoteList extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.list.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default NoteList;