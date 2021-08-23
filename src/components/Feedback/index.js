// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  isFeedbackState = () => this.setState({isFeedback: true})

  renderFeedbackSubmit = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="submit-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-container"
              onClick={this.isFeedbackState}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="reaction">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackSummary = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="summary-card">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />
        <h1 className="greeting">Thank You!</h1>
        <p className="description">
          We’ll use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedback
            ? this.renderFeedbackSummary()
            : this.renderFeedbackSubmit()}
        </div>
      </div>
    )
  }
}

export default Feedback
