import React from 'react';
import './App.css';


class App extends React.Component {

    state =  {advice:''};

    componentDidMount()
    {
    axios.get();
    }
    fetchAdvice =() => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response);
          })
        .catch((error) => {
        console.log(error);
         });
}
    render()
    {
        return ( 
        <h1>APP</h1>
        );
    }
}

export default App;