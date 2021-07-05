import './App.css';
import Header from './components/Header';
import ImageRoot from './components/ImageRoot';
import InsuranceList from './components/InsuranceList';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Voraussetzung: npm ist installiert!
// npx create-react-app name
function App() {
    return (
        // JSX
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/insurance.html">InsuranceList</Link>
                        </li>
                        <li>
                            <Link to="/images.html">ImageRoot</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/insurance.html">
                        <Header></Header>
                        <InsuranceList></InsuranceList>
                    </Route>
                    <Route path="/images.html">
                        <ImageRoot></ImageRoot>
                    </Route>
                    <Route path="/">
                        <h1>Startseite</h1>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
