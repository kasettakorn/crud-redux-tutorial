import React, { Component } from "react";
import { connect } from "react-redux"; //รู้จัก component vs. store
class EditComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newname = this.getName.value;
    const newmessage = this.getMessage.value;
    const data = {
      newname,
      newmessage,
    };
    //โยนเข้า reducer
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.comment.id,
      data:data,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="ป้อนชื่อ"
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.comment.name}
            required
          />
          <br />
          <br />
          <textarea
            rows="5"
            cols="28"
            placeholder="ข้อความ"
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.comment.message}
            required
          />
          <br />
          <br />
          <button onClick={this.handleSubmit}>UPDATE</button>{" "}
          {/* กดแล้วโยนไปที่ reducer */}
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
