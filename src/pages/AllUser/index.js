import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSVLink } from 'react-csv'

import { Button } from '../../components/atoms'
import { getUsers } from '../../network/api'
import './styles.css'

export default function AllUser () {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const headers = [
    { label: 'id', key: 'uid' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Status', key: 'status' }
  ]

  const csvLinkEl = React.createRef()

  useEffect(() => {
    async function getAllUsers (setUsers) {
      const data = await getUsers()
      setUsers(data)
    }
    getAllUsers(setUsers)
  }, [])

  return (
    <div className='login-page'>
      <div className='form'>
        <h1>All Users</h1>
        {users?.map((user, i) => {
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20
              }}
            >
              <p style={{ fontSize: 20 }}>{user.name}</p>
              <Button
                onClick={() => {
                  navigate('/users/edit', { state: { user } })
                }}
                style={{
                  width: 100,
                  height: 25,
                  borderRadius: 30,
                  padding: 'unset',
                  backgroundColor: '#007BFF'
                }}
              >
                Edit User
              </Button>
            </div>
          )
        })}
        <Button
          style={{ marginTop: 30 }}
          onClick={() => {
            navigate('/users/add/new-user')
          }}
        >
          Add New User
        </Button>

        <Button
          style={{ marginTop: 30 }}
          onClick={() => {
            csvLinkEl.current.link.click()
          }}
        >
          <CSVLink
            headers={headers}
            filename='users.csv'
            data={users}
            ref={csvLinkEl}
          />
          Get all users CSV
        </Button>
      </div>
    </div>
  )
}
