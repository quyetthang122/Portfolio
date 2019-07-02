import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Pride from '../img/Pride-Oscar.png';
import Intern from '../img/IT-Internship.png';
import Greenstone from '../img/Greenstone-Direct.png';
import Lobster from '../img/Lobterlash.png';
import Thang from '../img/Thangvu.png';
class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0}; 
    }

toggleCategories(){

    // Web Dev
    if(this.state.activeTab === 0){
        return(
        <div>
        <div className="projects-grid">
        // Card Project 1
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Pride+") center / cover"}}>Prideland.org.nz</CardTitle>
                <CardText>
                    Before and After School service website - Using Materializecss framework, Javasript to develop for front-end and using PHP and Mysql for sending and receving enrolment app - backend, improving UX/UI and graphic design. 
                </CardText>
                <CardActions border className="buttonCard">
                <a href="https://pridelands.org.nz/pride-oscar/pride-oscar.html" target="_blank"><Button colored>LiveDemo</Button></a>
                <a href=""><Button colored>  Github </Button></a> 
                <Button colored>Codepen</Button>
                    
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        // Card Project 2
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Intern+") center / cover"}}>TechIntern.co.nz</CardTitle>
                <CardText>
                    IT Tech Internship - using Bootstrap framework, Javasript and PHP for the email form. 
                </CardText>
                <CardActions border className="buttonCard">
                <a href="http://techintern.co.nz/" target="_blank"><Button colored>LiveDemo</Button></a>
                <a href=""><Button colored>  Github </Button></a> 
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        // Card Project 3
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Greenstone+") center / cover"}}>Greenstonedirect.co.nz</CardTitle>
                <CardText>
                    Greenstone store based on Wordpress platform to modify this website, using css to modify front-end of this website, integrated E-ship from NZ post, Paypal payment and Stripe payment. 
                </CardText>
                <CardActions border className="buttonCard">
                <a href="http://greenstonedirect.co.nz/" target="_blank"><Button colored>LiveDemo</Button></a>
                <a href=""><Button colored>  Github </Button></a> 
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        
        </div>
        
        <div className="projects-grid">
        // Card Project 1
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Lobster+") center / cover"}}>Lobsterlash.com</CardTitle>
                <CardText>
                    Beauty salon website using Bootstrap for the Front-end and lavarel framework for backend. 
                </CardText>
                <CardActions border className="buttonCard">
                <a href="http://lobsterlash.com/" target="_blank"><Button colored>LiveDemo</Button></a>
                <a href=""><Button colored>  Github </Button></a> 
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        // Card Project 2
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Thang+") center / cover"}}>thangvu.me</CardTitle>
                <CardText>
                    Porfolio website using Reactjs, Javasript, Css including material UI to develop this website.
                </CardText>
                <CardActions border className="buttonCard">
                <a href="https://pridelands.org.nz/pride-oscar/pride-oscar.html" target="_blank"><Button colored>LiveDemo</Button></a>
                <a href=""><Button colored>  Github </Button></a> 
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        // Card Project 3
        <Card style={{minWidth: '450', margin:'auto'}}>
                
        </Card>
        
        </div>

        
        </div>
        
       
        )
    }
    // Graphic Design
    else if(this.state.activeTab === 1){
        return(
            <div>
            <div className="projects-grid">
            // Card Project 1
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Pride+") center / cover"}}>Prideland.org.nz</CardTitle>
                    <CardActions border className="buttonCard">
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
            </Card>
            // Card Project 2
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Intern+") center / cover"}}>TechIntern.co.nz</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur saepe corporis perspiciatis et temporibus omnis ducimus, aut consequuntur odio repellat!
                    </CardText>
                    <CardActions border className="buttonCard">
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
            </Card>
            // Card Project 3
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#ffffff', height: '176px', background: "url("+Greenstone+") center / cover"}}>Greenstonedirect.co.nz</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur saepe corporis perspiciatis et temporibus omnis ducimus, aut consequuntur odio repellat!
                    </CardText>
                    <CardActions border className="buttonCard">
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
            </Card>
            
            </div>
            
    
            
            </div>
        )
    }
    else if(this.state.activeTab === 2 ){
        return(
            <div><h1>This is 3</h1></div>
        )
    }
    else if(this.state.activeTab === 3){
        return(
            <div><h1>This is 4</h1></div>
        )
    }
}
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
                    <Tab>Web Dev</Tab>
                    <Tab>Graphic Design</Tab>
                    <Tab>App</Tab>
                </Tabs>
                <section>
                    <Grid >
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()} 
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>

        )
    }
}

export default Projects;