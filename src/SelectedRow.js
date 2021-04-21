import React from 'react';

class SelectesRow extends React.Component {

    render() { 
        let {number, isLocked, lock, unlock} = this.props
        return ( 
            <li className='list-group-item'>{number} <button className='ml-3 btn btn-info'
            onClick={isLocked? unlock: lock}>
                {isLocked? 'Unlock' : 'Lock'}
            </button>
            </li>
         );
    }
}
 
export default SelectesRow;