import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Section1 from '../Section1'
import Footer from '../Footer'
import Section2 from '../Section2'

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
        <div className="bg-2">
          <div className="layers-container">
            <div>
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772411/raaj/layout-11_2x_y1nhx2.png"
                alt="layer1"
                className="layer-logo"
              />
              <h4 className="layer-heading">Multiple Modern Layouts</h4>
              <p className="layer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page quickly.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772777/raaj/layers-3_2x_s00zbm.png"
                alt="layer1"
                className="layer-logo"
              />
              <h4 className="layer-heading">Built with Bootstrap 4</h4>
              <p className="layer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page quickly.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772698/raaj/icon_2x_npnrpo.png"
                alt="layer1"
                className="layer-logo"
              />
              <h4 className="layer-heading">Fully Responsive</h4>
              <p className="layer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page quickly.
              </p>
            </div>
          </div>
          <hr className="line" />
          <div className="layers-container">
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772739/raaj/logo-1_2x_a30rvz.png"
              alt="geekwire"
              className="company-logo"
            />
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772792/raaj/logo-2_2x_f9mwkd.png"
              alt="slack"
              className="company-logo"
            />
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772812/raaj/logo-3_2x_deazf0.png"
              alt="envato"
              className="company-logo"
            />
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772835/raaj/logo-4_2x_yfrdc2.png"
              alt="ustoday"
              className="company-logo"
            />
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629772751/raaj/logo-5_2x_g6crai.png"
              alt="forbes"
              className="company-logo"
            />
          </div>
        </div>
        <Section1 />
        <Section2 />
        <Footer />
      </>
    )
  }
}

export default Landscape
