import '../Styles/signup.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import axios from 'axios';

const SignUp = () => {
    let navigate = useNavigate()


    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let confrimPassword = useRef(null)

    let Upload = (e) => {
        e.preventDefault()

        let data = {

            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            confrimPassword: confrimPassword.current.value
        }
        console.log(data);
        if (firstName && lastName && email && (password = confrimPassword)) {
            axios.post('http://localhost:4000/register', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        } else {
            alert("invalid credentials")
        }

    }


    return (

        <div className="background">
            <div className="up">
                <h1>Sign Up</h1>
                <form action="" onSubmit={Upload}>
                    <div className="fill">

                        <div className="first">
                            <label htmlFor="">firstName</label> <br />
                            <input ref={firstName} type="text" placeholder="enter first name" /> <br /><br />
                        </div>

                        <div className="last">
                            <label htmlFor="">lastName</label> <br />
                            <input ref={lastName} type="text" placeholder="enter last name" /><br /><br />
                        </div>

                        <div className="Email">
                            <label htmlFor="">email</label> <br />
                            <input ref={email} type="email" placeholder="enter emailid@gmail.com" /> <br /><br />
                        </div>

                        <div className="pass">
                            <label htmlFor="">password</label> <br />
                            <input ref={password} type="password" placeholder="enter password" /> <br /><br />
                        </div>

                        <div className="password">
                            <label htmlFor="">confrimPassword</label> <br />
                            <input ref={confrimPassword} type="password" placeholder="re-enter the password" /> <br /><br />
                        </div>

                        <div className="btn">
                            <button>Sign Up</button>
                        </div>

                        <div className="navlinks">
                            <p>Don't have Account ?</p>
                            <Link to='/'>Sign In</Link>
                        </div>

                    </div>

                </form>


            </div>
        </div>
    );
}

export default SignUp;