import React from 'react';
import Arena from './components/Questão01/Arena';
import World from './components/Questão01/World';

function App() {
    return(
        <div>
            <World>
                <Arena />
                <Arena />
                <Arena />
            </World>
        </div>
    )
}

export default App;