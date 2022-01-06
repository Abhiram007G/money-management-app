// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <li className="balances-container balance-colour">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p className="your-heading">Your Balance</p>
          <p className="amount-element" testid="balanceAmount">
            Rs. {balance}
          </p>
        </div>
      </li>

      <li className="balances-container income-colour">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p className="your-heading">Your Income</p>
          <p className="amount-element" testid="incomeAmount">
            Rs. {income}
          </p>
        </div>
      </li>

      <li className="balances-container expenses-colour">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p className="your-heading">Your Expenses</p>
          <p className="amount-element" testid="expensesAmount">
            Rs. {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
