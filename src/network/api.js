const BASE_URL = 'api/v1'

export const addUser = async user => {
  return new Promise((res, rej) => {
    fetch(`http://localhost:5000/${BASE_URL}/POST/add/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(rawData =>
      rawData.json().then(jsonData => {
        return res(jsonData.success)
      })
    )
  })
}

export const getUsers = () => {
  return new Promise((res, rej) => {
    fetch(`http://localhost:5000/${BASE_URL}/GET/all/user`).then(rawData =>
      rawData.json().then(jsonData => {
        return res(jsonData.data)
      })
    )
  })
}

export const editUser = user => {
  return new Promise((res, rej) => {
    fetch(`http://localhost:5000/${BASE_URL}/PUT/edit/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(rawData =>
      rawData.json().then(jsonData => {
        return res(jsonData.success)
      })
    )
  })
}
