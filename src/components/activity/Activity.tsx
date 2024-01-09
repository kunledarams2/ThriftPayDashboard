interface activityProps {
    children: React.ReactNode,
    time: Date
}

import classes from './Activity.module.css'
import TimeAgo from 'timeago-react';


const Activity = ({children,time}:activityProps) => {
  return (
    <div className={classes.activityContainer}>
      <p>{children}</p>
      <span>
      <TimeAgo datetime={time} live={false}/>
      </span>
    </div>
  )
}

export default Activity