import React from 'react';
import NumberTable from './NumberTable';

class NumberRow extends React.Component {
    
    render() { 
        let {isSelected, isLocked, select, unselect, number} = this.props;
        return ( 
            <tr>
                <td>
                    {number}
                </td>
                <td>
                   <button 
                   className={isSelected? 'btn btn-warning' : 'btn btn-info'} 
                   onClick={isSelected? unselect : select} 
                   disabled={isLocked}>{isSelected? 'Remove From Selection' : 'Add to Selected'}</button>
                </td>
            </tr>
         );
    }
}
 
export default NumberRow;