import { useState } from "react";

const Register = () => {

    const [name, setName] = useState ("")
    const [surname, setSurname] = useState ("")
    const [course, setCourse] = useState ("")
    const [email, setEmail] = useState ("")
    const [pwd, setpwd] = useState ("")
 const [female, setFemale]= useState("")





    const handleSubmit = async (e) => {
        e.preventDefault();
        const Submit = {name, surname, course, email, female}

        console.log(Submit);
    }
    


    return(
        <div>
            <h1 style={{color: "pink"}} >Registration Form </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    id="Name"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <br/>
                
                <label htmlFor="Surname">Surname</label>
                <input
                    type="text"
                    id="Surname"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    required
                />
                <br/>
                

                <label htmlFor="Course">Course</label>
                <input
                    type="text"
                    id="password"
                    onChange={(e) => setCourse(e.target.value)}
                    value={course}
                    required
                />
                <br/>
            
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setpwd(e.target.value)}
                    value={pwd}
                    required
                />
                <br/>
                

                <label htmlFor="Email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <br/>
                

                <label htmlFor="Date">Date</label>
                <input
                    type="Date"
                    id="Date"
                />
                <br/>
                <label htmlFor="male/female"></label>
                <select
                   value={""}
                   onChange={(e) => setFemale(e.target.value)}
                   >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                   </select>
                <br/>
                <button> Submit </button>

                {/* <P>{name}</P>
                <P>{surname}</P>
                <P>{course}</P>
                <P>{email}</P>
                <P></P> */}
               </form>
        </div>
    )
}

export default Register;