import React, {useState} from "react";

const Form = () => {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conf_password: "",
    })

    const [isValidState, setIsValidState] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        conf_password: false
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setFormState({
            ...formState,
            [name]: value,

        })
    }

    const blurHandler = (e) => {
        let firstName = false
        let lastName = false
        let email = false
        let password = false
        let conf_password = false

        if(formState.firstName.length < 2 && !formState.firstName == ""){
            firstName = true
        }
        if(formState.lastName.length < 2 && !formState.lastName == ""){
            lastName = true
        }
        if(formState.email.length < 5 && !formState.email == ""){
            email = true
        }
        if(formState.password.length < 8 && !formState.password == ""){
            password = true
        }
        if((formState.password != formState.conf_password) && !formState.conf_password == ""){
            conf_password = true
        }

        setIsValidState({
            firstName,
            lastName,
            email,
            password,
            conf_password
        })
        
    }

    return (
        <div>
            <div>
                <form className="grid-container">
                    <label class="item1-1 box" htmlFor="firstName">
                        First Name:
                    </label>
                    <div class="item1-2">
                    <input
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        class = "box"
                        type="text"
                        name="firstName"
                        id="firstName"
                    />
                    { (isValidState.firstName)? <p class="error" style={{"color": "red"}}>First Name must be at least 2 characters</p>: null}
                    </div>

                    <label class="item2-1 box" htmlFor="lastName">
                        Last Name:
                    </label>
                    <div class="item2-2">
                    <input
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        class="box"
                        type="text"
                        name="lastName"
                        id="lastName"
                    />
                    { (isValidState.lastName)? <p class="error" style={{"color": "red"}}>Last Name must be at least 2 characters</p>: null}
                    </div>

                    <label class="item3-1 box" htmlFor="email">
                        Email:
                    </label>
                    <div class="item3-2">
                    <input
                        onChange={changeHandler}
                        onBlur= {blurHandler}
                        class="box"
                        type="email"
                        name="email"
                        id="email"
                    />
                    { (isValidState.email)? <p class="error" style={{"color": "red"}}>Email must be at least 5 characters</p>: null}
                    </div>

                    <label class="item4-1 box" htmlFor="password">
                        Password:
                    </label>
                    <div class="item4-2">
                    <input
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        class="box"
                        type="password"
                        name="password"
                        id="password"
                    />
                    { (isValidState.password)? <p class="error" style={{"color": "red"}}>Password must be at least 8 characters</p>: null}
                    </div>

                    <label class="item5-1 box" htmlFor="conf_password">
                        Confirm Password:
                    </label>
                    <div class="item5-2">
                    <input
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        class="box"
                        type="password"
                        name="conf_password"
                        id="conf_password"
                    />
                    { (isValidState.conf_password)? <p class="error" style={{"color": "red"}}>Password and Confirm Password must match</p>: null}
                    </div>
                </form>
            </div>
            <div class="center">
                <p class="item6-1">First Name:</p>
                <p class="item6-2">{formState.firstName}</p>
                <p class="item7-1">Last Name:</p>
                <p class="item7-2">{formState.lastName}</p>
                <p class="item8-1">Email:</p>
                <p class="item8-2">{formState.email}</p>
                <p class="item9-1">Password:</p>
                <p class="item9-2">{formState.password}</p>
                <p class="item10-1">Confirm Password:</p>
                <p class="item10-2">{formState.conf_password}</p>
            </div>
        </div>
    );
};

export default Form;
