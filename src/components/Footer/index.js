import './index.css'

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div>
          <h1>Omega</h1>
          <p style={{width: '200px', fontSize: '14px'}}>
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <div className="logo-container">
            <div className="logo-box" style={{paddingTop: '7px'}}>
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629798954/raaj/logo-twitter-2-x_2x_nuviz2.png"
                alt="twitter"
              />
            </div>
            <div className="logo-box" style={{paddingLeft: '10px'}}>
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629799356/raaj/logo-fb-simple-2-x_2x_mpysts.png"
                alt="fb"
              />
            </div>
            <div
              className="logo-box"
              style={{paddingTop: '5px', paddingRight: '5px'}}
            >
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1629799417/raaj/google-2-x_2x_t1d4pq.png"
                alt="google"
              />
            </div>
          </div>
        </div>
        <div>
          <h3>About</h3>
          <p>Our Mission</p>
          <p>Our Story</p>
          <p>Team Members</p>
        </div>
        <div>
          <h3>Learn</h3>
          <p>Tutorials</p>
          <p>How it Works</p>
          <p>F.A.Q</p>
        </div>
        <div>
          <h3>Stories</h3>
          <p>Blog</p>
          <p>Tech Stories</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            <a href="link">support@grayic.com</a>
          </p>
          <p>
            <a href="link">+133-394-3439-1435</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
