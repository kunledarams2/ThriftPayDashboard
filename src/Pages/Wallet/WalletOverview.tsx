import classes from './walletOverview.module.css'
import Container from '../../components/container/Container'
import DoughnutOverview from '../../components/fullDoughnutChart/DoughnutOverview'
import SubHeader from '../../components/subHeader/SubHeader'
import { Outlet } from 'react-router-dom'
const WalletOverview = () => {
  return (
  
    <div className={`${classes.nav}`}>
      <SubHeader></SubHeader>
      <Container>
      <Outlet/>
      </Container>

      {/* <div className={classes.chart}>
      <DoughnutOverview options={[{dataTitle:'yo',dataColor:'green',data:12},{dataTitle:'Active',dataColor:'blue',data:12},{dataTitle:'Pending',dataColor:'pink',data:12}]} title="Total transactions"></DoughnutOverview>
      </div> */}
    </div>
    
  )
}

export default WalletOverview