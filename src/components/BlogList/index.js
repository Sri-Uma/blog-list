import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(object => (
        <BlogItem key={object.id} item={object} />
      ))}
    </ul>
  )
}

export default BlogList
