import React from 'react' ;
import ReactDOM from "react-dom/client";
import Login from './login';
import HomePage from './homepage';


const App: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Final Paper Project</h1>
            </header>
            <main>
                <p>This is the starting point of your web platform.</p>
            </main>
            <footer>
                <p>&copy; 2023 Your Name</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);