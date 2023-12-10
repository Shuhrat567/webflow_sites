import './App.css'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Brands from '../brands/Brands'
import Solution from '../business_solution/Solution'
import Form from '../form/Form'
import Services from '../job_services/Services'
import Footer from '../footer/Footer'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Brands></Brands>
      <Solution></Solution>
      <Form></Form>
      <Services></Services>
      <Footer></Footer>
    </>
  )
}

export default App
