import React, { useState } from 'react';
import "./styles.css"

function Form() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    function handleOnChange(event) {
        const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(input);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-input">
                <label>Enter e-mail:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleOnChange}
                    placeholder="Enter your email"
                />
            </div>

            <div className="form-input">
                <label>Enter password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={handleOnChange}
                    placeholder="Enter your password"
                />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}

export default Form;
