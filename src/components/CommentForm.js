import React, { Component } from 'react'
import { connect } from 'react-redux'; //รู้จัก component vs. store
class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            name,
            message,
            editing: false,
        }
        //โยนเข้า reducer
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data
        })
        this.getName.value = "";
        this.getMessage.value = "";
        
    }

    render() {
        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="ป้อนชื่อ" ref={(input)=> this.getName = input} required /><br/><br/>
                    <textarea rows="5" cols="28" placeholder="ข้อความ" ref={(input)=> this.getMessage = input} required /><br/><br/>
                    <button>Comment</button> {/* กดแล้วโยนไปที่ reducer */}
                </form>
            </div>
        )
    }
}

export default connect()(CommentForm)
