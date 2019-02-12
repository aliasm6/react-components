import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Laticia" />
      <CommentDetail author="Jimon" />
      <CommentDetail author="Amreet" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
