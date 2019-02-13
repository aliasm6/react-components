import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Laticia" 
        timeAgo="Today at 5:45PM"
        userComment="This is great"
      />
      <CommentDetail
        author="Jimon"
        timeAgo="Today at 7:36AM"
        userComment="You're awesome"
      />
      <CommentDetail
        author="Amreet"
        timeAgo="Yesterday at 11:59PM"
        userComment="I whole-heartedly disagree"
      />
    </div>

  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
