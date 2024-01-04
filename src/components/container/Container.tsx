interface props {
    children: React.ReactNode
}

import classes from './container.module.css'
const Container = (props:props) => {
  return (
    <div className={`${classes.container}`}>
        {props.children}
    </div>
  )
}

export default Container