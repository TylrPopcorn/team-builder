import React from 'react';

const Form = function (props) {
    //console.log(props)
    const handleChange = event => {
        /* console.log(event); */
        const { name, value } = event.target;
        props.change(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input
                    placeholder='enter ur name'
                    type="text"
                    name='name'
                    value={props.values.name}
                    onChange={handleChange}
                />
            </label>

            <label> Email
                <input
                    placeholder='enter ur email'
                    type='text'
                    name='email'
                    value={props.values.email}
                    onChange={handleChange}
                />
            </label>

            <label> Role
                <input
                    placeholder='enter your role'
                    type="text"
                    name="role"
                    value={props.values.role}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" value="Create" />
        </form>

    )
}

export default Form;