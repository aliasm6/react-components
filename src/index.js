import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want to do that? 
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Laticia"
          timeAgo="Today at 5:45PM"
          userComment="This is great"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jimon"
          timeAgo="Today at 7:36AM"
          userComment="You're awesome"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Amreet"
          timeAgo="Yesterday at 11:59PM"
          userComment="I whole-heartedly disagree"
        />
      </ApprovalCard>
    </div>

  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
