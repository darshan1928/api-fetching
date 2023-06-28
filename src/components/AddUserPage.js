import React, { useState } from 'react'
import { Button, Card , Form} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddUserPage() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [age,setAge]=useState("")
const [premiumMember,setPremiumMember]=useState(false)


const navigate = useNavigate()

async function submitUser(event){

    event.preventDefault()
    alert("ddfhdshfdsfjsda")

    
const response = await axios.post("http://localhost:8000/users/",{
    "name":name,
    "email":email,
    "age": parseInt(age),
    "premiumMember": premiumMember
})

const id = response.data.id 
navigate("/users/"+id)
    }

  return (
    <div className=' row justify-content-center'>
      <div className="col-md-4">
        <Card className='p-4'>
            <Form onSubmit={(event)=>submitUser(event)}>
        <Form.Group className="mb-3"  >
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} required onChange={(event)=>setName(event.target.value)} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} required onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} required onChange={(event)=>setAge(event.target.value)} type="number" placeholder="Age" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={premiumMember} onChange={(event)=>setPremiumMember(!premiumMember)} type="checkbox" label="Premium User" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
   
      </Form>


        </Card>
      </div>
    </div>
  )
}

export default AddUserPage
