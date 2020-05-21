import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditComponent from "./EditComponent";

class ShowComment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Show All Comment</h1>
        {this.props.comments.map((comment) => (
          <div key={comment.id}>
            {comment.editing ? (
              <EditComponent comment={comment} key={comment.id} />
            ) : (
              <Comment key={comment.id} comment={comment} />
            )}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //ส่งค่าข้าม component - change state to props
  return {
    comments: state,
  };
};
export default connect(mapStateToProps)(ShowComment);
