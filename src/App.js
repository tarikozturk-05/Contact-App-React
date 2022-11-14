
import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import { AddUser, EditUser } from './utils/function';
import { ToastContainer } from "react-toastify";
import Table from './components/table/Table';
function App() {
  // const [name, setName] = useState("")
  // const [phone, setPhone] = useState("")
  // const [gender, setGender] = useState("")
  

  const initialValue={
    name:"",
    phone:"",
    gender:""
  }
  // console.log('initialValue.name', initialValue.name)
  // console.log('initialValue.gender :>> ', initialValue.gender);
  // console.log('initialValue.phone', initialValue.phone)
  const [value, setValue] = useState(initialValue)


  const handleSubmit=(e)=>{
    e.preventDefault()

   
  if (value.id) {
    EditUser(value)
  }
   else  {AddUser(value)}
   setValue(initialValue)
 }

 const editHandler=(id,name,phone,gender)=>{
  setValue({id,name,phone,gender})
}
  
  return (
    <div className="App">
   <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
   <Table  editHandler={editHandler} />
   <ToastContainer/>
    </div>
  );
}

export default App;
