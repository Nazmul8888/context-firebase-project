import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ProviderContext/AuthProvider";



const Register = () => {


    const {createUser} = useContext(AuthContext);

 

    const handelRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={ handelRegister} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  
                </label>
                <input type="text" id="name" placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  
                </label>
                <input type="email" id="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" id="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
              <p>Already have a account? Please Login <Link to='/login'>
              <button className="btn btn-link">Login</button>
              </Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;