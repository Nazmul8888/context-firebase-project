import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ProviderContext/AuthProvider";


const Login = () => {

 const {signInUser, signWithGoogle,signWithGithub} = useContext(AuthContext)


    // even handler
    const handelLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e. target.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
        })
        .catch(error=>{
            console.log(error);
        })

    }


  // google even hand ler
    const handelGoogleSignIn = () =>{
      signWithGoogle()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error)
      })
    }

    const handelGithubLogin = () =>{
      signWithGithub()
      .then(result=>{
        console.log(result.user)
      })

      .catch(error=>{
        console.log(error)
      })

    }




    return (
        <div className="hero min-h-screen bg-[#F06292]">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handelLogin} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
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
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p>new to context? Please Register <Link to='/register'>
        <button className="btn btn-link">Register</button>
        </Link></p>
        <p><button onClick={handelGoogleSignIn} className="btn btn-ghost">Google</button></p>

        <p><button onClick={handelGithubLogin} className="btn btn-primary hover:bg-red-600">Github</button></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;