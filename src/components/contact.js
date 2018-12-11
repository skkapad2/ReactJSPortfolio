import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';



class Contact extends Component {
	render() {
		return(

			<div className="contact-body">
			<Grid className="contact-grid">
			<Cell col={6}>
				<h2> Sagar Kapadia </h2>
				<img src="https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/5-128.png" alt="avatar" style={{height:'200px'}}
				/>
				<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Sagar graduated from the University of Illinois at Urbana-Champaign with a focus in Software Development.</p>
			</Cell> 
			<Cell col={6}>
			<h2> Contact Me</h2>
			<hr/>

			<div className="contact-list">


			<List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
    <i className="fa fa-phone" aria-hidden="true"/>
    (224) 600-4545
    </ListItemContent>
  </ListItem>
   <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
    <i className="fa fa-envelope" aria-hidden="true"/>
    <a href="mailto:skapadia45@gmail.com">skapadia45@gmail.com</a>
    </ListItemContent>
  </ListItem>
   <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
    <i className="fa fa-linkedin" aria-hidden="true"/>
    <a href="https://www.linkedin.com/in/sagar-kapadia/">www.linkedin.com/in/sagar-kapadia</a>
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
    <i className="fa fa-github" aria-hidden="true"/>
    <a href="https://github.com/skkapad2">https://github.com/skkapad2</a>
    </ListItemContent>
  </ListItem>
</List>
</div>
			</Cell>
			</Grid>
			</div>
			)
	}
}

export default Contact;