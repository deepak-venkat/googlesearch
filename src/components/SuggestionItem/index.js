import './index.css'

const SuggestionItem = props => {
  const {eachObj} = props
  const {id, suggestion, onClickArrow} = eachObj

  const onClickArr = () => {
    onClickArrow(id)
  }
  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={onClickArr} className="btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
