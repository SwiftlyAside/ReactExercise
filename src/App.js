import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";

function App() {
    return (
        <div className="ui container comments">
            <img src={logo} className="App-logo" alt="logo"/>
            <SeasonDisplay />
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!"
                               avatar={faker.image.animals()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 6:45PM" content="I like the subject"
                               avatar={faker.image.animals()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 4:45PM" content="I like the writing."
                               avatar={faker.image.animals()}/>
            </ApprovalCard>
        </div>
    );
}

export default App;
