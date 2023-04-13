// Write your JS code here
import BlogItems from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {myBlogList} = props
  return (
    <ul className="list-blogs">
      {myBlogList.map(eachBlog => (
        <BlogItems listBlogs={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}
export default BlogList
