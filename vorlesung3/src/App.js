import './App.css';
import Header from './components/Header';
import ImageRoot from './components/ImageRoot';
import InsuranceList from './components/InsuranceList';

// Voraussetzung: npm ist installiert!
// npx create-react-app name
function App() {
    return (
        // JSX
        <>
            <Header></Header>
            <div style={{ display: 'flex' }}>
                <ImageRoot></ImageRoot>
            </div>
            <InsuranceList></InsuranceList>
        </>
    );
}

export default App;
