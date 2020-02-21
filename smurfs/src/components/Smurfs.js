import React from 'react';
import { connect } from 'react-redux';
import { deleteData } from '../actions'
import Styled from 'styled-components';

const Smurf = Styled.div`
display: flex;
flex-flow: column;
border: 2px solid black;
width: 25%;
padding: 2%;
margin: 2% auto;
background-color: lightblue;
`


const Smurfs = (props) => {
    console.log('SMURFS', props.data)

    return (
        <div>
            {props.data.map(smurf => {
                return (
                    <Smurf>
                        <div>Name: {smurf.name}</div>
                        <div>Age: {smurf.age}</div>
                        <div>Height: {smurf.height}cm</div>
                        <div>
                            <button>Edit</button>
                            <button onClick={props.deleteData(smurf.id)}>Delete</button>
                        </div>
                    </Smurf>
                )

            })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: [...state.data]
    }
}

export default connect(mapStateToProps, { deleteData })(Smurfs);