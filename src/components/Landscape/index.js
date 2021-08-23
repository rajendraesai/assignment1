import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Landscape extends Component {
  render() {
    return (
      <>
        <div className="bg-1">
          <Header />
          <div className="intro-container">
            <div className="intro-card">
              <h1 className="intro-heading">Get your next landing page.</h1>
              <p className="intro-data">
                Create custom landing pages with Omega that convert more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </p>
              <button type="button" className="button">
                Start 14 Days Free Trial
              </button>
              <p className="intro-tag">No credit card required</p>
            </div>
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629741719/raaj/bitmap_3x_vffbo2.png"
              alt="intro-img"
              className="intro-image"
            />
          </div>
        </div>
        <h1>HI</h1>
        <Footer />
      </>
    )
  }
}

export default Landscape
