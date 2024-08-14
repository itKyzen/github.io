import React, {Component} from 'react';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/prop-types
            title: this.cleanTitle(props.title),
        };
    }

    cleanTitle(title) {
        return title.replace(/\d+/g, '').replace(/\s+/g, '');
    }

    getTitle() {
        return `***${this.state.title}***`;
    }

    // Сеттер для title
    setTitle(title) {
        this.setState({
            title: this.cleanTitle(title),
        });
    }

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.setTitle(this.props.title);
    }

    componentDidUpdate(prevProps) {
        // eslint-disable-next-line react/prop-types
        if (prevProps.title !== this.props.title) {
            // eslint-disable-next-line react/prop-types
            this.setTitle(this.props.title);
        }
    }

    render() {
        return (
            <>
                <div>
                    <h2>{this.getTitle()}</h2> {/* Используем геттер для отображения title */}
                </div>
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