import { BrowserRouter, Route, Routes  } from 'react-router-dom';   // curly brackets is for lot of things you need to export
import Navbar from './Components2/Navbar'
import About from './Pages/About';
import Home from './Pages/Home'
import Services from './Pages/Services'








function App() {
    return(



<BrowserRouter>

<Navbar/>

<Routes>

<Route path='/' element ={<></>} />

<Route path ='/About' element={ <About> </About>} />

<Route path ='/Home' element={ <Home> </Home >} />

<Route path ='/Services' element={ <Services> </Services>} />

<Route path ='/Contact' element={ <Contact> </Contact>} />

</Routes>





</BrowserRouter>

    )
}


export default App