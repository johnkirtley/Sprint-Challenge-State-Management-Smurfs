import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sendData } from '../actions'


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
        console.log('data sent to action')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" name="name" value={smurf.name} onChange={handleChanges} />

                <label htmlFor="age"></label>
                <input type="number" name="age" value={smurf.age} onChange={handleChanges} />

                <label htmlFor="height"></label>
                <input type="text" name="height" value={smurf.height} onChange={handleChanges} />
                <button>Submit Form</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: [...state.data]
    }
}

export default connect(mapStateToProps, { sendData })(Form);