import React , { Component }from 'react'
import Info_Bar from './Info_Bar/Info_Bar';
import Write_Review from './Write_Review/Write_Review';
import Reviews_List from './Reviews_List/Reviews_List';
import { fetch } from 'whatwg-fetch'
import styles from '../styles.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setItem } from '../actions'

const url = `/reviews${window.location.pathname}`

class Reviews extends Component {
  constructor(props) {
    super(props) 
    this.getReviews = this.getReviews.bind(this)
    this.handleSubmitReview = this.handleSubmitReview.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }
  
  getReviews() {
    fetch(url)
    .then(item => item.json())
    .then(item => this.props.setItem(item))
  }

  handleSubmitReview(newReview) {
    fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview)
    }).then(() => this.getReviews())
  }

  render() {
    const { reviews, itemId, itemName } = this.props.item
    return (
      <div className={styles["reviews-body"]}>
        <div>
          <br></br>
          <h5>Reviews</h5>
          <Info_Bar reviews={reviews} />
          <Reviews_List reviews={reviews}/>
          <Write_Review 
            itemId={itemId}
            itemName={itemName} 
            handleSubmitReview={this.handleSubmitReview}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators({
  setItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)