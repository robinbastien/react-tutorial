var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Sup world, I am a comment box
      </div>
    ); // return
  } // render
}); // CommentBox




ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);
