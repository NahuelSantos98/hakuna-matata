import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"

const NavAndFooter = (props) => {
  const{children} = props
  return (
    <>
      <NavBar /> 
      {props.children} 
      <Footer />
      
    </>
  )
}

export default NavAndFooter