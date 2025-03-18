import { Header } from "./components/navBar/Navbar";
import { Main } from "./components/Main/main";
import { Footer } from "./components/footer/Footer";
import { Card } from "./components/Training/train";
import {data} from './components/Main/data'


const dataelement=data.map((entry,index)=>{
	return <Card
	key={index}
	{...entry}
	/>
})
function App() {
    return ( 
		<>
		<Header/>
		<Main
	
		/>






		{/* <Footer/> */}
		
		
		{/* {dataelement} */}
	
		


		</>	        
		
    )
}

export default App;