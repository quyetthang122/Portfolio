import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Cv from '../files/ThangVu-CV.pdf';
class Resume extends Component {
    render(){
        return (
            <div className="resume-body">
                <Grid>
                    <Cell col={12}>
                    <object  style={{backgroundColor: '#fff' , width: '100%', height: '75vh'}} data={Cv}></object>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;