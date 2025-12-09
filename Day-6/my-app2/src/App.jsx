
import './App.css'
import Content from './Content'
import Header from './Header'

function App() {
  
let frnds=['ram','sam','jam']
  return (
    <>
     <Header title={"My App Header"}
     city={"Chennai"}/>
     {
      (frnds.length)?
      <Content frnds={frnds}/>:
      (<p>List is Empty</p>)
     }
    </>
  )
}

export default App
