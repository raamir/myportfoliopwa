import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project ToDoMVC App</CardTitle>
            <CardText>
              This is my ToDo App Created in React. Source code in Github
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/raamir.github.io/tree/master/projects/react">GitHub </a></Button>
              <br/>     
        <Button colored><a href="https://raamir.github.io/projects/react">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
         <div className="projects-grid">
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f8f09554-8991-4572-b2f6-eb2430e97462/ruby-on-rails.png) center / cover'}} >Ruby On Rails Project</CardTitle>
            <CardText>
              This is my E-Commerce Website Created in Ruby On Rails Project. Source code in Github.
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/depotapp">GitHub </a></Button>
              <br/>     
        <Button colored><a href="http://tranquil-peak-83050.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/1280px-Logo_jQuery.svg.png) center / cover'}} >jQuery Project</CardTitle>
            <CardText>
              This is my PWA Disney Quiz Created in JQuery.
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/raamir.github.io/tree/master/projects/quizpwa">GitHub </a></Button>
              <br/>     
        <Button colored><a href="https://raamir.github.io/projects/quizpwa/home.html">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby On Rails</Tab>
          <Tab>JQuery</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;