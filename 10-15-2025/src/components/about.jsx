import React from 'react';

export  default class about extends React.Component {
    constructor(parameters) {
        super(parameters);
        this.state = {
            name: 'Urvashi',
            age: 20
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
            </div>
        )
    }
}
