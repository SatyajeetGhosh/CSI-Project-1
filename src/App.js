import './App.css';
import { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
import FormInput from './components/FormInput';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SecondPage from './components/SecondPage';

function App() {
  const [values, setValues] = useState({
    name:"",
    email:"",
    dob:"",
    password:""
  });  //Causes page to re-render on change in user-input
  
  const inputFields = [
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"Name",
      // label:"Name",
      errorMessage:"Name should not include any special character",
      pattern:"^[A-Za-z0-9]{4,30}",
      required: true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      // label:"Email",
      errorMessage:"Please enter a valid email",
      pattern:`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`,
      required: true
    },
    {
      id:3,
      name:"dob",
      type:"date",
      // label:"Date of Birth",
      errorMessage:"Date of Birth Required",
      required: true
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      // label:"Password",
      errorMessage:"Password should be atleast 8 characters and should include atleast 1 letter, 1 number and 1 special character",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
      required: true
    }
  ];

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // function register(){
  //   navigate("/secondpage");
  // }

  const onChange= (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  };


  console.log(values);

  return (
    <div className="App vh-100 d-flex align-items-center justify-content-center">
      <form className="p-4 rounded-3" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <FormInput key={inputField.id} {...inputField} value={values[inputField.name]} onChange={onChange} />
          // onClick={register}
        ))}
        <button className="btn btn-primary d-block m-auto w-50 p-2 fs-5">Submit</button>
      </form>

      {/* <Routes>
        <Route path="/secondpage" element={<SecondPage />}/>
      </Routes> */}
    </div>
  );
}

export default App;
