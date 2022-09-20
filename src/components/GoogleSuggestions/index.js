// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestion extends Component {
  state = {userInput: ''}

  onuserInput = event => {
    this.setState({userInput: event.target.value})
  }

  filterSelectedSuggestion = id => {}

  render() {
    const {suggestionsList} = this.props
    const {userInput} = this.state
    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.includes(userInput),
    )

    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logog-image"
        />
        <div className="searchinput-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            className="input-box"
            onChange={this.onuserInput}
          />
          <ul>
            {filteredSuggestionList.map(eachsuggestion => (
              <SuggestionItem
                eachsuggestion={eachsuggestion}
                key={eachsuggestion.id}
                filterSelectedSuggestion={this.filterSelectedSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestion
