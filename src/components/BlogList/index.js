import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoader: true}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const jsonResponse = await response.json()
    const updatedData = jsonResponse.map(eachObj => ({
      author: eachObj.author,
      avatarUrl: eachObj.avatar_url,
      id: eachObj.id,
      imageUrl: eachObj.image_url,
      title: eachObj.title,
      topic: eachObj.topic,
    }))
    this.setState({blogList: updatedData, isLoader: false})
  }

  render() {
    const {blogList, isLoader} = this.state
    return isLoader ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="blogUl">
        {' '}
        {blogList.map(eachObj => (
          <BlogItem blogDetails={eachObj} key={eachObj.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
