import TransactionStatus from '../transactionStatus/TransactionStatus';
import classes from './transactionlist.module.css'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { transactionsProp } from '../../utils/types/Types';
const CheckBox = () => {
    return (<MdCheckBoxOutlineBlank style={{color:'#C3C6D2',width:20,height:20}}/>)
}

const Transactionlist = ({transactions}:transactionsProp) => {
  return (
    <div className={classes.tableContainer}>
        <table>
        <thead>
            <tr>
                <th><CheckBox /></th>
                <th>User</th>
                <th>Transaction ID</th>
                <th>Transaction type</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Reference Number</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {transactions?.map(transaction => (
                <tr>
                <td><CheckBox /></td>
                <td className={classes.user}>
                    <span>{transaction.username}</span>
                    <span>{transaction.email}</span>
                </td>
                <td>{transaction.tnxId}</td>
                <td>{transaction.tnxType}</td>
                <td>{transaction.date}</td>
                <td><TransactionStatus status={transaction.status}/></td> 
                <td>{transaction.refNum}</td>
                <td className={classes.amount}>N {transaction.amount}</td>
            </tr>
            ))}
        {/*  */}

        {/* <tr>
            <td></td>
            <td className={classes.user}>
                <span>Orlando Diggs</span>
                <span>orlando@Example.com</span>
            </td>
            <td>TXN12345</td>
            <td>Deposit</td>
            <td>15/09/2023, 14:30</td>
            <td><TransactionStatus status='pending'/></td> 
            <td>TXN12345</td>
            <td>N20,000</td>
        </tr>
        <tr>
            <td></td>
            <td className={classes.user}>
                <span>Orlando Diggs</span>
                <span>orlando@Example.com</span>
            </td>
            <td>TXN12345</td>
            <td>Deposit</td>
            <td>15/09/2023, 14:30</td>
            <td><TransactionStatus status='failed'/></td> 
            <td>TXN12345</td>
            <td>N20,000</td>
        </tr>
        <tr>
            <td></td>
            <td className={classes.user}>
                <span>Orlando Diggs</span>
                <span>orlando@Example.com</span>
            </td>
            <td>TXN12345</td>
            <td>Deposit</td>
            <td>15/09/2023, 14:30</td>
            <td>Completed</td> 
            <td>TXN12345</td>
            <td>N20,000</td>
        </tr> */}
        </tbody>
        </table>
        
    </div>
  )
}

export default Transactionlist