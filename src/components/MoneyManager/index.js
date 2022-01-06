import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    transactionTypeInput: 'INCOME',
    tranactionsList: [],
  }

  updateTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  updateAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({transactionTypeInput: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, transactionTypeInput} = this.state

    const newTranaction = {
      id: v4(),
      titleInput,
      amountInput: parseInt(amountInput),
      transactionTypeInput,
    }
    let income = 0
    let expenses = 0
    if (transactionTypeInput === transactionTypeOptions[0].optionId) {
      income = parseInt(amountInput)
    } else {
      expenses = parseInt(amountInput)
    }

    this.setState(prevState => ({
      tranactionsList: [...prevState.tranactionsList, newTranaction],
      titleInput: '',
      amountInput: '',
      transactionTypeInput: 'INCOME',
      income: prevState.income + income,
      expenses: prevState.expenses + expenses,
    }))
  }

  onDelete = id => {
    const {tranactionsList} = this.state
    let amount
    let type
    const filteredTransactionList = tranactionsList.filter(each => {
      if (each.id === id) {
        amount = each.amountInput
        type = each.transactionTypeInput
        return false
      }
      return true
    })

    if (type === 'INCOME') {
      this.setState(prevState => ({
        tranactionsList: filteredTransactionList,
        income: prevState.income - amount,
      }))
    } else {
      this.setState(prevState => ({
        tranactionsList: filteredTransactionList,
        expenses: prevState.expenses - amount,
      }))
    }
  }

  render() {
    const {
      income,
      expenses,
      titleInput,
      amountInput,
      transactionTypeInput,
      tranactionsList,
    } = this.state
    const balance = income - expenses

    const checkTransactionsList =
      tranactionsList.length !== 0 ? tranactionsList : []

    const getItemsList = () =>
      checkTransactionsList.map(each => (
        <TransactionItem
          transactionItemDetails={each}
          key={each.id}
          onDelete={this.onDelete}
        />
      ))

    return (
      <div className="main-container">
        <div>
          <div className="top-row">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <ul className="balance-row">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </ul>
        </div>
        <div className="bottom-row-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                onChange={this.updateTitle}
                value={titleInput}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                onChange={this.updateAmount}
                value={amountInput}
              />
              <br />
              <label htmlFor="transaction-type">TYPE</label>
              <br />
              <select
                id="transaction-type"
                onChange={this.onChangeOption}
                value={transactionTypeInput}
              >
                <option value="INCOME" defaultValue>
                  Income
                </option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1 className="add-transaction-heading">History</h1>
            <div className="list-item">
              <p className="list-titles">Title</p>
              <p className="list-titles">Amount</p>
              <p className="list-titles">Type</p>
              <p className="list-titles"> {} </p>
            </div>
            <ul className="history-list">{getItemsList()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
