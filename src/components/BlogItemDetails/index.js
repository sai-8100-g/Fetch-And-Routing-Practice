import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: [],
    isLoader: true,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getBlogDetails(id)
  }

  getBlogDetails = async id => {
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonObj = await response.json()
    console.log(jsonObj)
    const updatedData = {
      author: jsonObj.author,
      avatarUrl: jsonObj.avatar_url,
      content: jsonObj.content,
      id: jsonObj.id,
      imageUrl: jsonObj.image_url,
      title: jsonObj.title,
      topic: jsonObj.topic,
    }
    console.log(updatedData)
    this.setState({blogDetails: updatedData, isLoader: false})
  }

  render() {
    const {blogDetails, isLoader} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogDetails
    return isLoader ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="detailsCard">
        <h1>{title}</h1>
        <div className="profileCard">
          <img src={avatarUrl} alt="avatar" />
          <h4>{author}</h4>
        </div>
        <div className="blogImg">
          <img src={imageUrl} alt={title} />
        </div>
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
