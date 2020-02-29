import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sendData } from '../actions'
import Styled from 'styled-components';

const StyledForm = Styled.form`
display: flex;
flex-flow: column;
width: 20%;
margin: auto;
`
const StyledButton = Styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 15%;
margin: 0.5rem auto;
padding: 0.5rem 4rem;
text-align: center;
border-radius: 5px;
border: none;
background-color: papayawhip;
`


const Form = (props) => {
    const [smurf, setSmurf] = useState(
        {
            name: '',
            age: '',
            height: '',
            id: Date.now()
        }
    )

    const handleChanges = e => {
        e.preventDefault();
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.sendData(smurf)
        setSmurf({
            name: '',
            age: '',
            height: '',
        })
        console.log('data sent to action')
    }


    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={smurf.name} onChange={handleChanges} />

                <label htmlFor="age">Age: </label>
                <input type="number" name="age" value={smurf.age} onChange={handleChanges} />

                <label htmlFor="height">Height: </label>
                <input type="text" name="height" value={smurf.height} onChange={handleChanges} />
                <StyledButton>Submit</StyledButton>
            </StyledForm>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: [...state.data]
    }
}

export default connect(mapStateToProps, { sendData })(Form);