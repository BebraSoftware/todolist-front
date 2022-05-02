import React from 'react';
import TodoList from './views/TodoList';

function App() {

    return (
        <div className="App">
            <main className="container">

                <div className="divider"></div>

                {/* Please check /views/TodoList.js for detail*/}
                <TodoList/>
            </main>
        </div>
    );
}

export default App;
