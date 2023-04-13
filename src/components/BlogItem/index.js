// Write your JS code here
import './index.css'

const BlogItems = props => {
  const {listBlogs} = props
  const {title, description, publishedDate} = listBlogs
  return (
    <li className="list">
      <div className="blog-header">
        <h1 className="blog-title-head">{title}</h1>
        <h2 className="blog-published">{publishedDate}</h2>
      </div>
      <p className="blog-description">{description}</p>
      <hr className="separator" />
    </li>
  )
}
export default BlogItems
