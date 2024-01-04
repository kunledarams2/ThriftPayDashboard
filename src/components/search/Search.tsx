import classes from './Search.module.css'
import search from '../../assets/header/search.png'
const Search = () => {
  return (
    <div className={classes.search}>
        <span><img src={search} alt="search" /></span>
        <span> <input type="text" name="Search" placeholder='Search' /> </span>
    </div>
  )
}

export default Search