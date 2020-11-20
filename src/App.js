import logo from './logo.svg';
import './App.css';
import CommentDetail from "./CommentDetail";

function App() {
    return (
        <div className="ui container comments">
            <img src={logo} className="App-logo" alt="logo"/>
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
}

export default App;
