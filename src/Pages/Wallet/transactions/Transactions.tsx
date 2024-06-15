import classes from './transactions.module.css'
import { useLocation } from "react-router-dom";
import Search from '../../../components/search/Search';
import Button from '../../../components/btn/button';
import filters from '../../../assets/wallet/filters.png';
import exportIcon from '../../../assets/wallet/exportIcon.png';
import Transactionlist  from '../../../components/transactions/Transactionlist'
import { dummyTnxs } from '../../../utils/dummyData'

const Transactions = () => {
  const url = useLocation();
  const headerTitle = url.pathname.split("/");
  const titleName = headerTitle[2];
  return (
    <>
    <header className={classes.header}>
    <span className={classes.title}>{titleName}</span>
    <div className={classes.mid}>
    <Search className='flex-grow' />
    <Button logo={filters} onClick={()=> console.log('clicked')} className='text-[#444A5B] font-semibold p-2'>Filters</Button>
    </div>
    <Button logo={exportIcon} onClick={()=> console.log('clicked')} className='border-1 text-[#444A5B] font-semibold border-[#C3C6D2] rounded-md px-3 py-2 text-sm'>Export</Button>
    </header>
    <main>
    <Transactionlist transactions={dummyTnxs}/>
    </main>
    </>
  )
}

export default Transactions