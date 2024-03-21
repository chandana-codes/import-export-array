// Write your code here
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div>
    <Navbar />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost Your Way?</h1>
      <p>We cannot seem to find the page you are looking for.</p>
    </div>
  </div>
)

export default NotFound
