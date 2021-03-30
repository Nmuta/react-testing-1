import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Message extends Component {
  render () {
    return (
      <div className={`row message ${this.props.read ? 'read' : 'unread'} ${this.props.selected ? 'selected' : ''}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.selected ? 'checked' : ''} onChange={() => this.props.toggleSelectedFlag(this.props.id)} />
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.props.starred ? 'fa-star' : 'fa-star-o'}`} onClick={() => this.props.toggleStarFlag(this.props.id)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.labels.map((label) => <span key={label} className="label label-warning">{label}</span>)}
          <a href="#">{this.props.subject}</a>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  id: PropTypes.number,
  read: PropTypes.bool,
  starred: PropTypes.bool,
  subject: PropTypes.string,
  selected: PropTypes.bool,
  labels: PropTypes.array,
  toggleSelectedFlag: PropTypes.func,
  toggleStarFlag: PropTypes.func
}

export default Message