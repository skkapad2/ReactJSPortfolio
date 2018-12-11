import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state={ activeTab:0};
	}

	toggleCategories() {
		
		if (this.state.activeTab===0){
		return (
<div className="projects-grid">
	{/* Project 1*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	            	{/* Project 2*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>

	       {/* Project 3*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	           </div>
	           )
			
			
  
	       }

   else if (this.state.activeTab===1) 
	{
		return (
				<div className="projects-grid">
	{/* Project 1*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>Angular Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	            	{/* Project 2*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>Angular Project #2 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>

	       {/* Project 3*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>Angular Project #3 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	           </div>
			)
	}
	
	else if (this.state.activeTab===2) 
	{
		return (
					<div className="projects-grid">
	{/* Project 1*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://miro.medium.com/max/900/1*SluXAlSPIxxWjwUsiqD2Kw.png) center / cover'}}>React Native Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	            	{/* Project 2*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://miro.medium.com/max/900/1*SluXAlSPIxxWjwUsiqD2Kw.png) center / cover'}}>React Native Project #2 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>

	       {/* Project 3*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://miro.medium.com/max/900/1*SluXAlSPIxxWjwUsiqD2Kw.png) center / cover'}}>React Native Project #3 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	           </div>
			)
	}
	else if (this.state.activeTab===3) 
	{
		return (
					<div className="projects-grid">
	{/* Project 1*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: 'black', height:'200px', padding:'-3em', background: 'url(https://dev.acquia.com/sites/default/files/blog/nodejs-new-pantone-black2.png) center / cover'}}>Node.js Project #1 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	            	{/* Project 2*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: 'black', height:'200px', background: 'url(https://dev.acquia.com/sites/default/files/blog/nodejs-new-pantone-black2.png) center / cover'}}>Node.js Project #2 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>

	       {/* Project 3*/}
		<Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: 'black', height:'200px', background: 'url(https://dev.acquia.com/sites/default/files/blog/nodejs-new-pantone-black2.png) center / cover'}}>Node.js Project #3 </CardTitle>
	          <CardText>
	          Placeholder
	          </CardText>
	          <CardActions border>
	          <Button colored>Github</Button>
	          <Button colored>Codepen</Button>
	          <Button colored>Live Demo</Button>

	          </CardActions>
	          <CardMenu style= {{color: '#fff'}}>
	          	<IconButton name ="share"/>
	          </CardMenu>
	           </Card>
	           </div>
			)
	}



	}


	render() {
		return(

			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId})} ripple>	
				<Tab>React</Tab>
				<Tab>Angular</Tab>
				<Tab>React Native</Tab>
				<Tab>Node.js</Tab>
				
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
