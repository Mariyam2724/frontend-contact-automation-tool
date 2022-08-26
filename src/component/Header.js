import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../userContext';

const Header = () => {
  const navigate = useNavigate();

  const { setLoggedIn, loggedIn } = useContext(UserContext);

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('user');
    navigate('/login');
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundImage: 'url("https://5.imimg.com/data5/NY/KE/MY-28569131/bulk-sms-services-500x500.png") ' }}>

      <div className="container">

        <a className="navbar-brand me-2" href="http://localhost:3000/homepage">
          <img
            src="http://atlas-content-cdn.pixelsquid.com/stock-images/chat-message-icon-computer-nraAl3D-600.jpg"
            height="86"
            alt="BulkSender"
            loading="lazy" style={{ position: 'relative', right: '80px' }}
          /><h5 style={{ position: 'relative', right: '80px' }}>Contacts Automation Tool</h5>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>


        <div className="collapse navbar-collapse" id="navbarButtonsExample " >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">

            <li className="nav-item"><button type="button" className="btn btn-dark px-3 me-2" style={{ position: 'relative', right: '80px', backgroundColor: 'yellow' }} >
              <NavLink className="nav-link" to="/homepage">Home</NavLink></button>
            </li>
            <li className="nav-item"><button type="button" className="btn btn-dark px-3 me-2" style={{ position: 'relative', right: '80px', backgroundColor: 'yellow' }} >
              <NavLink className="nav-link" to="/ds">Dashboard</NavLink></button>
            </li>
          </ul>


          <div className="d-flex align-items-center">
            {loggedIn ?
              <button className='btn btn-danger' onClick={logout}>Logout</button>
              :
              <button type="button" className="btn btn-dark px-3 me-2" style={{ position: 'relative', left: '70px', backgroundColor: 'yellow' }} >
                <NavLink className="nav-link" to="/login">Login</NavLink>

              </button>
            }
            <button type="button" className="btn btn-dark px-3 me-3" style={{ position: 'relative', left: '80px', backgroundColor: 'yellow' }}>
              <NavLink className="nav-link" to="/signup">

                Sign up for free</NavLink>
            </button>




          </div>
        </div>

      </div>

    </nav>

  )
}

export default Header