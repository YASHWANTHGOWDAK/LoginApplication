import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../Styles/sigin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  let navigate = useNavigate()

  let email = useRef(null)
  let password = useRef(null)


  let Load = (e) => {
    e.preventDefault()

    let data ={
      email:email.current.value,
      password : password.current.value
    }
    console.log(data);
    if(email && password){
      axios.post('http://localhost:4000/login',data)
      .then((res)=>{
        if (res.data.status == 200) {

          alert(res.data.message)
          navigate('/tasklist')

        } else {
          alert(res.data.message)
        }
      })
    }
    
  }

  return (
    <div className="background">
      <div className="signin">

        <h1> Sign In</h1>

        <form action="" onSubmit={Load}>
          <div className="in">
            <div className="email">
              <label htmlFor="">Email</label> <br /><br />
              <input ref={email} type="email" placeholder="enter emailId@gmail.com" /> <br /><br />
            </div>

            <div className="password">
              <label htmlFor="">Password</label><br />
              <input ref={password} type="password" placeholder="enter password" /> <br /> <br />
            </div>

            <div className="forgot">
              <a href="">forgot password?</a> <br /><br />
            </div>

            <div className="btn">
              <button>Sign In</button> <br />
              
            </div>

          </div>

          <div className="navlinks">
            <p>Don't have Account ?</p>
            <Link to='/sign_up' className='button'>Sign Up</Link>
          </div>

        </form>

      </div>
    </div>
  );
}

export default SignIn;