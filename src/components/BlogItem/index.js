import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = blogDetails
  return (
    <Link className="linkedItem" to={`/blogs/${id}`}>
      <li className="blogItem">
        <div className="imgCard">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="itemDetails">
          <h4 className="topic">{topic}</h4>
          <h1 className="title">{title}</h1>
          <div className="avatarCard">
            <img src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
