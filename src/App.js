import React from 'react';
import './App.css';


class App extends React.Component {

    state =  {advice:''};

    componentDidMount()
    {
    console.log('COMPONENT DID MOUNT');
    }
    render()
    {
        return ( 
        <h1>APP</h1>
        );
    }
}

export default App;