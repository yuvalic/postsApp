import React, {Component} from 'react'
import Filter from './Filter'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import moment from 'moment'
import {modalStyles} from './consts'


const Post = ({post, show}) => {
  return <div className="post-wrapper">
    <div className="image-wrapper">
      <img alt="" onClick={show.bind(this, post)} src={`https://www.gravatar.com/avatar/${post.image}?s=50`}/>
    </div>
    <div className="details-wrapper">
      <div className="email-label">{post.email}</div>
      <div className="message">{post.message}</div>
    </div>
  </div>
}

Post.defaultProps = {
  post: {}
}

Post.propTypes = {
  post: PropTypes.object
}

export default class PostsList extends Component {

  interval = null

  state = {
    posts:       [],
    focusedPost: {},
    modalIsOpen: false,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('/posts').then(res => res.json()).then(posts => {
        this.setState({
          posts,
        })
      }).catch(() => {
        console.error('Server is down')
      })
    }, 1000)
  }

  _onFilterChange = (value) => {
    this.setState({
      filter: value
    })
  }

  showPost = (post) => {
    const filteredPosts = this.state.posts.slice(0)
    const lastPost      = filteredPosts.reverse().find(p => p.email === post.email) || {}
    post.date           = lastPost.date
    this.setState({
      focusedPost: post,
      modalIsOpen: true,
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    const {posts, filter, modalIsOpen, focusedPost} = this.state

    const filteredPosts = filter ? posts.filter(post => post.email.includes(filter)) : posts
    return <div>
      <Filter onChange={this._onFilterChange}/>
      <div className="posts-list">
        {filteredPosts.map((post, key) => <Post show={this.showPost} key={key} post={post}/>)}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <button className="modal-close-btn" onClick={this.closeModal}>X</button>
        <div className="modal-content">
          <div className="image-wrapper">
            <img alt="" src={`https://www.gravatar.com/avatar/${focusedPost.image}?s=80`}/>
          </div>
          <div className="details-wrapper">
            <div className="email-label">{focusedPost.email}</div>
            <div className="date"><b>Last Active:</b> {moment(focusedPost.date).format("MMMM Do, HH:mm:ss")}</div>
          </div>
        </div>
      </Modal>
    </div>
  }

}