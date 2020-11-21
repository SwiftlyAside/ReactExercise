import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import CommentDetail from "./CommentDetail";

function App() {
    return (
        <div className="ui container comments">
            <img src={logo} className="App-logo" alt="logo"/>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!"
                           avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 6:45PM" content="I like the subject"
                           avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 4:45PM" content="I like the writing."
                           avatar={faker.image.avatar()}/>
        </div>
    );
}

export default App;
