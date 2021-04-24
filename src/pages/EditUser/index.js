import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Input, Label, Button } from '../../components/atoms'
import { editUser } from '../../network/api'
import './styles.css'

export default function EditUser () {
  const navigate = useNavigate()
  const { user } = useLocation().state
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [gender, setGender] = useState(user.gender)
  const [status, setStatus] = useState(user.status)
  const [uid, setUid] = useState(user.uid)

  useEffect(() => {
    console.log(user)
  }, [])

  const handleEditUser = async () => {
    let user = {
      name,
      email,
      gender,
      status,
      uid
    }
    const response = await editUser(user)
    if (response === true) {
      alert('edited successfully')
      navigate('/')
    }
  }

  return (
    <div className='login-page'>
      <div className='form'>
        <Input
          type='text'
          placeholder={user.name}
          onChange={name => {
            setName(name.currentTarget.value)
          }}
        />
        <Input
          type='text'
          placeholder={user.email}
          onChange={email => {
            setEmail(email.currentTarget.value)
          }}
        />
        <span style={{ fontWeight: 'bold' }}>Gender</span>
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

        <span style={{ marginTop: 20, fontWeight: 'bold' }}>Status</span>
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
        <Button onClick={handleEditUser} style={{ marginTop: 10 }}>
          Save
        </Button>
      </div>
    </div>
  )
}
