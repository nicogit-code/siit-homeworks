import React from 'react';
import Header from './header/Header';

function App() {
    return (
        <div>
            <Header user="Alexandru" />
            <a href="https://scoalainformala.ro" target="_blank" rel="noopener noreferrer">Scoala Informala</a>
        </div>
    );
}

//default export
export default App;

// const settings = 'my settings';

// //named export
// export { 
//     App,
//     settings
// }
