import React from 'react';
import NumberRow from './NumberRow';
import SelectedRow from './SelectedRow';
import {produce} from 'immer';


class NumberDisplay extends React.Component {
    state = {  
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: [],
       
    }
  

    addOnClick =() =>{
        let number = Math.floor(Math.random() *1000) + 1;
        const nextState = [...this.state.numbers, number];
        this.setState({numbers: nextState});
    }

    onNumberSelectClick = number =>{
        console.log('selected');
        const nextState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(number);
        })

        this.setState(nextState);
    }

    onNumberUnselectClick = number =>{
        const filtered = this.state.selectedNumbers.filter(n => n !== number)
        this.setState({selectedNumbers: filtered})
    }

    onLockClick = number =>{
        const nextState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(number);
        })
        this.setState(nextState);
    }

    onUnlockClick = number =>{
        const filtered = this.state.lockedNumbers.filter(n => n !== number);
        this.setState({lockedNumbers: filtered})
    }

    
    render(){
    return ( 
            <div className= "container" style={{marginTop:50}}>
                <button className="btn btn-success btn-block" onClick={this.addOnClick}>Add a number</button>
                <br/>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                        <td>Number</td>
                        <td>Add/Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((number) => 
                        {
                            return <NumberRow 
                            number = {number}
                            select = {() => this.onNumberSelectClick(number)}
                            unselect = {() => this.onNumberUnselectClick(number)}
                            isSelected={this.state.selectedNumbers.includes(number)}
                            isLocked={this.state.lockedNumbers.includes(number)}/>

                        })}
                    </tbody>
                </table>
                

                {!!this.state.selectedNumbers.length && 
                <div className="col-md-6">
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Selected Numbers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.selectedNumbers.map((number) => {
                                return <SelectedRow 
                                number ={number}
                                unlock={() => this.onUnlockClick(number)}
                                lock={() => this.onLockClick(number)}
                                isLocked={this.state.lockedNumbers.includes(number)}
                                />
                            })}
                        </tbody>
                    </table>
            </div>
           
            }
            </div>
            )
        }
        
    }

 
export default NumberDisplay;