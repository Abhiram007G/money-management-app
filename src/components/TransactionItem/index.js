// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails, onDelete} = props
  const {
    id,
    titleInput,
    amountInput,
    transactionTypeInput,
  } = transactionItemDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className=" transaction-item-title">{titleInput}</p>
      <p className="transaction-item-title ">{amountInput}</p>
      <p className=" transaction-item-title">{transactionTypeInput}</p>
      <button
        type="button"
        className="delete-icon"
        onClick={onClickDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
