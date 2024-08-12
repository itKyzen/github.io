import React, {Component} from 'react';

class NoteList extends Component {
    render() {
        return (
            <>
                <ul>
                    {/* eslint-disable-next-line react/prop-types */}
                    {this.props.list.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default NoteList;