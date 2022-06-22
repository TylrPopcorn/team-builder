
import react, { useState } from 'react'
import './App.css';
import Form from './Components/Form'

function App() {
  const [members, updateMembers] = useState([])
  const [values, setValues] = useState({ email: "", name: "", role: "" })

  const onSubmit = function () {
    updateMembers({ values, ...members })
    setValues({ email: "", name: "", role: "" })
  }

  const onChange = function (name, value) {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="App">
      <h1> Team Builder App </h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />

      {
        members.map((value, id) => {
          return (
            <div key={id}>
              {members.email}, {members.name}, {members.role}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
