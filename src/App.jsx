import './App.scss'
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            something:'',
            else: 1
        }
    }


    render() {
        return (
            <div>
                <h1>Here might be your app</h1>
            </div>
        );
    }
}

export default App
