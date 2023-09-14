import './App.css'
import HomeNormal from './Components/HomeNormal'


// let mockEmployees = [
//   {
//     id: 0,
//     name: "mock",
//     lastname: "mocklastname",
//     position: "Manager",
//   },
//   {
//     id: 1,
//     name: "employee 1",
//     lastname: "em",
//     position: "Engineer",
//   },
//   {
//     id: 2,
//     name: "employee 2",
//     lastname: "lord",
//     position: "Designer",
//   },
// ];

function App() {
  return (
    <>
      <HomeNormal mockEmployees={mockEmployees} />
    </>
  )
}

export default App
