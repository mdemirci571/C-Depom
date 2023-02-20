import { useState } from "react"

const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  })

  //! Destr.
  const { username, email, password, address } = formData

  const handleFormData = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
       username:${username}
       email:${email}
       password:${password}
    `)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">FORMS WITH OBJECT</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span>{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleFormData}
          value={username}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span>{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleFormData}
          value={email}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleFormData}
          value={password}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Adress: {address}
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          onChange={handleFormData}
          value={address}
        />
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  )
}

export default FormWithObject
