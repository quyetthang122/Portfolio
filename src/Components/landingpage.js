import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../img/photo.png';
class Landing extends React.Component {
    render(){
        return (
            <div style={{width: '100%', margin:'auto'}} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                    
                    <div className="intro">
                    
                        <div className="webDev">
                        <h3 className="hi">Hi I'm Thang Vu</h3>
                        <h2 className="hi-web">Full Stack Web Developer</h2>
                        <br/>
                        <p>HTML/CSS | Bootstrap | Java | JavaScript | React | React Native | PHP | Mysql</p>
                        <div className="socialLink">
                        {/* LinkedIn */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" ></i>
                        </a>
                        {/* Github */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" ></i>
                        </a>
                        {/* Free-Code-Camp */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" ></i>
                        </a>
                        {/* Youtube */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube-square" aria-hidden="true" ></i>
                        </a>
                        </div>
                        </div>
                    </div>
                    </Cell>
                    <img className="avatar-img" src={Avatar} alt=""/>
                </Grid>
            </div>
        )
    }
}

export default Landing;