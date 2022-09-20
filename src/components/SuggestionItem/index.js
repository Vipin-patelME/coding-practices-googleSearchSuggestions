// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachsuggestion, filterSelectedSuggestion} = props
  const {suggestion, id} = eachsuggestion

  const onSelect = () => {
    filterSelectedSuggestion(id)
  }
  return (
    <l1 className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onSelect}
      />
    </l1>
  )
}

export default SuggestionItem
