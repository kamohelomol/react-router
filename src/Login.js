import Product1 from 'react';
import {useRef, useEffect, useState} from 'react';

const Login = () => {

     const userRef = useRef();
    //  const errRef = useRef();

    const [user, setUser] = useState ('');
    const [pwd, setPwd] = useState ('');
    // const [errMsg, setErrMsg] = useState ('');
    const [success, setSuccess] = useState (false);

     useEffect (() => {
         userRef.current.focus();
     },[])
    
    //  useEffect ( () => {
    //      setErrMsg('');
    //  }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser("")
        setPwd("");
        setSuccess(true);
    }



    return (
        <>
           {success ? (
               <section>
                  <h1 style={{color: "orange"}}   > Thank you for logging in! </h1>
                  <br />

                  <img src= {Product1}></img>

                  <p>
                     <a href='#'> Go to home page</a>
                  </p>
               </section>
           ) : (
        <section>
            
             <h1 style={{color: "pink"}} > Login Page </h1>

             <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                /><br></br> <br/>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                 <br/>
                 
                 <br/>
                <button> Login </button>
               </form>

               <p>

                  Want to Join the team? <br/>

                  <span className='line'>

                    {/*put router link here*/}

                    <a href="#">Sign up</a>
                  </span>
               </p>

        </section>


           )}
           </>
    )
}

export default Login;