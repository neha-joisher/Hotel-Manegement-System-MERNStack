import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Navbar/nav.css'


const Nav1 = () => {
      return (
            <Navbar className="py-1 justify-content-center nav_bar" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/rooms'>Our Luxurious Rooms </a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/restaurants'>Our Restaurants</a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/foods'>Our Products</a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/weddings'>Weddings</a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav1
