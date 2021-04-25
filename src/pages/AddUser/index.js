import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Label, Button } from '../../components/atoms'
import { addUser } from '../../network/api'
import './styles.css'

export default function AddUser () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')
  const [status, setStatus] = useState('Inactive')
  const navigate = useNavigate()
  const handleAddUser = async () => {
    if (!name || !email || !gender || !status) {
      alert('please provide complete information')
    } else {
      let user = {
        name,
        email,
        gender,
        status
      }
      const response = await addUser(user)
      if (response == true) {
        alert('user created successfully')
        navigate('/')
      }
    }
  }
  return (
    <div className='login-page'>
      <div className='form'>
        <div className='login-form'>
          <Input
            type='text'
            placeholder='name'
            onChange={name => {
              setName(name.currentTarget.value)
            }}
          />

          <Input
            type='text'
            placeholder='email address'
            onChange={email => {
              setEmail(email.currentTarget.value)
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Gender</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <Input
              style={{ margin: 0, padding: 0, width: 30 }}
              checked={gender === 'Male'}
              type='radio'
              onChange={() => {
                setGender('Male')
              }}
            />
            <Label style={{ marginBottom: 5 }}>Male</Label>
            <Input
              style={{ margin: 0, padding: 0, width: 30 }}
              checked={gender === 'Female'}
              type='radio'
              onChange={() => {
                setGender('Female')
              }}
            />
            <Label style={{ marginBottom: 5 }}>Female</Label>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <span style={{ marginTop: 20, fontWeight: 'bold' }}>Status</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <Input
              style={{ margin: 0, padding: 0, width: 30 }}
              checked={status === 'Active'}
              type='radio'
              onChange={() => {
                setStatus('Active')
              }}
            />
            <Label style={{ marginBottom: 5 }}>active</Label>
            <Input
              style={{ margin: 0, padding: 0, width: 30 }}
              checked={status === 'Inactive'}
              type='radio'
              onChange={() => {
                setStatus('Inactive')
              }}
            />
            <Label style={{ marginBottom: 5 }}>in-active</Label>
          </div>
          <Button onClick={handleAddUser} style={{ marginTop: 10 }}>
            Add User
          </Button>
        </div>
      </div>
    </div>
  )
}
