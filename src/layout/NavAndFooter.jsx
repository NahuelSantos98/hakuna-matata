import React from 'react'

const NavAndFooter = (props) => {
  return (
    <>
      <NavBar /> 
      {props.children} 
      <Footer />
      
    </>
  )
}

export default NavAndFooter