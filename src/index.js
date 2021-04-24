import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddUser, AllUser, EditUser } from './pages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path='/' element={<AllUser />} />
          <Route exact path='/users/add/new-user' element={<AddUser />} />
          <Route exact path='/users/edit' element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
