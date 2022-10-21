import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Navbar</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarColor03'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>Home
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Categories</a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>Books</a>
                <a className='dropdown-item' href='#'>Movies</a>
                <a className='dropdown-item' href='#'>Music</a>
                <a className='dropdown-item' href='#'>Games</a>
                <a className='dropdown-item' href='#'>Electronics</a>
                <a className='dropdown-item' href='#'>Computers</a>
                <a className='dropdown-item' href='#'>Home</a>
                <a className='dropdown-item' href='#'>Garden</a>
                <a className='dropdown-item' href='#'>Tools</a>
                <a className='dropdown-item' href='#'>Grocery</a>
                <a className='dropdown-item' href='#'>Health</a>
                <a className='dropdown-item' href='#'>Beauty</a>
                <a className='dropdown-item' href='#'>Toys</a>
                <a className='dropdown-item' href='#'>Kids</a>
                <a className='dropdown-item' href='#'>Baby</a>
                <a className='dropdown-item' href='#'>Clothing</a>
                <a className='dropdown-item' href='#'>Shoes</a>
                <a className='dropdown-item' href='#'>Jewerly</a>
                <a className='dropdown-item' href='#'>Sports</a>
                <a className='dropdown-item' href='#'>Outdoors</a>
                <a className='dropdown-item' href='#'>Automotive</a>
                <a className='dropdown-item' href='#'>Industrial</a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Features</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Pricing</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>About</a>
            </li>
          </ul>
          <form className='d-flex'>
            <input classname='form-control me-2' type='text' placeholder='Search' />
            <button className='btn btn-outline-primary ms-2 my-sm-0' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
