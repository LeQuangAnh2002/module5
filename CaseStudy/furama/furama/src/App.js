import './App.css';
import ListService from './components/service/ListService';
import HomeFurama from './components/display/HomeFurama';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListCustomer from './components/customer/ListCustomer';
import ListEmployee from './components/employee/ListEmployee';
import CreateCustomer from './components/customer/CreateCustomer';
import UpdateCustomer from './components/customer/UpdateCustomer';
import CreateEmployee from './components/employee/CreateEmployee'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*Customer*/}
          <Route path="/" exact element={<HomeFurama />} />
          <Route path="/service" element={<ListService />} />
          <Route path="/customer" element={<ListCustomer />} />
          <Route path="/create" element={<CreateCustomer />} />
          <Route path={`customer/update/:id`} element={<UpdateCustomer />}/>
          {/*Employee*/}
          <Route path="/employee" element={<ListEmployee />} />
          <Route path="/employee/add" element={<CreateEmployee />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
