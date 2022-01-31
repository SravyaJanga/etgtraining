import React, { useState } from "react";
import useInputCustomHook from "./useInputCustomHook";
function FormCustomHookOne() {
    const [firstName, bindFirstName, resetFirstName] = useInputCustomHook('')
    const [lastName, bindLastName, resetLastName] = useInputCustomHook('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text"
                    {...bindFirstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                    type="text"
                    {...bindLastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default FormCustomHookOne