import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
injectTapEventPlugin();


const RATE = 1.8;

class App extends Component {
	constructor() {	

		super();

		this.state = {
			euros: 0,
			dollars: 0,
			doRound: false,
			bgColor: 0,
		}
	}

updateEuro = (input)=>{
	let eur = parseFloat(input)
	let dlr = this.state.doRound? Math.round(eur * RATE) : eur * RATE

	this.setState(
		{
			euros:eur,
			dollars:dlr,
			doRound: this.state.doRound
		}
	);
}

updateDollar = (input) =>{
	let dlr = parseFloat(input)
	let eur = this.state.doRound? Math.round(dlr/RATE) : dlr/RATE;

	this.setState({
		euros:eur,
		dollars:dlr,
		doRound:this.state.doRound
	});
}

roundAll = (e,isChecked)=>{
	

	this.setState({
		euros: this.state.euros,
		dollars:this.state.dollars,
		doRound:isChecked
	});
	 
}

	
  render() {
	// building a css style color hex string, e.g., '#0000ff'
	const c = this.state.bgColor;
	const bgcol = "#"+(c*256*256+c*256+255).toString(16);
	
    return (
		<MuiThemeProvider>
			<Paper style={{width: 600,}}>
				<div>
					Euros: <TextField value={this.state.euros} onChange={(e,v)=>{this.updateEuro(v);}} />
				</div><div>
					Dollars: <TextField value={this.state.dollars} onChange={(e,v)=>{this.updateDollar(v)}}/>
				</div><div>
					<Checkbox label="Round" onCheck= {this.roundAll}  />
				</div><div>
					<RaisedButton label="Clear"/>
				</div>
			</Paper>
		</MuiThemeProvider>
    );
  }
}

export default App;
