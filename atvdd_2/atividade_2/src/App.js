import React from 'react';
import Arena from './components/Questão01/Arena';
import World from './components/Questão01/World';

function App() {
    return(
        <div>
            <World>
                <Arena arena="Gotham I" />
                <Arena arena="Gotham II" />
                <Arena arena="Gotham III" />
            </World>
        </div>
    )
}

export default App;