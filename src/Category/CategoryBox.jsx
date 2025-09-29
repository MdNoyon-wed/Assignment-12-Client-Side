 import PropTypes from 'prop-types'
 import queryString from 'query-string';
import { useNavigate } from 'react-router';


const CategoryBox = ({ label, icon:Icon }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    let currentQuery = {category : label}
    console.log(currentQuery)
     const url = queryString.stringifyUrl({
      url:'/',
      query:currentQuery,
     })
 
 
     navigate(url)

  }

  // icon error
  return (
    <div
    onClick={() =>handleClick()}
    className={`flex mt-20
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  hover:outline
  border-b-2
  transition
  cursor-pointer`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox