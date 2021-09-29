import {ReactComponent as SeedLogo} from "./seedlogo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <a
                className="App-link"
                href="https://seed.im"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SeedLogo className="seed-logo" />
                <h2>We build software for the future of finance </h2>{" "}
            </a>
        </div>
    );
}

export default App;
