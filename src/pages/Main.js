import React, {useState} from 'react'
import Form from '../components/Form'

const Main = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    type: ""
  })
  return (
    <div>
      <h1>This is the main page</h1>
      <Form userInfo={userInfo} setUserInfo={setUserInfo}/>
    </div>
  )
}

export default Main