import classes from './transactionStatus.module.css'
interface props {
    status: string
}

const TransactionStatus = ({status}:props) => {
  return (
    <div className={`${classes[status]} ${classes.status}`}>{status}</div>
  )
}

export default TransactionStatus