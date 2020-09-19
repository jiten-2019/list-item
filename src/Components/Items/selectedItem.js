import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../../actions/contactAction'

class SelectedItem extends PureComponent {
  itemArr2 = (data, removeItem) => {
      return (
        data.selectedContacts.length ? 
        data.selectedContacts.map(function (contact, i){
          return(
            <div className="selected-item" key={i}>
              <h2 className="heading">{contact.name}</h2>
              <ul>
                {
                  contact.selectedListArray.map((data, index) => {
                    return(
                      <li key={data.listItemId} >
                        <span>{data.item}</span>
                        <span className="remove" onClick={() => removeItem(data)}>X</span>
                      </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
          )
        }) : <div className="no-item">No values selected</div>
    )
  }
  render() {
    return (
       this.itemArr2(this.props.selectedListItem, this.props.removeItem)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedListItem: state.contact
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: listData => dispatch(removeItem(listData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);