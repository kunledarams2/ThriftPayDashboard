import clsx from 'clsx'
import classes from './Status.module.css'

interface props {
    type: 'md'|'sm',
    boxColor: string,
    children: React.ReactNode
}
const Status = ({type,boxColor,children}:props) => {
  return (
    <div className={clsx(classes[type], classes.container)}>
        <span style={{backgroundColor:boxColor}}></span>
        <span className={classes.status}>{children}</span>
    </div>
  )
}

export default Status