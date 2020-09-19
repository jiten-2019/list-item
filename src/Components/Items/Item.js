import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../actions/contactAction';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state={
      itemData: this.props.itemDataFromStore
      // selectedItemArr: []
    }
   
  }
  itemArr = (data, addItem) => {
    return (
      data.contacts.map((contact, i) => {
        return(
          <div className="item-list" key={i}>
            <h2 className="heading" >{contact.name}</h2>
            <ul> 
              {
                contact.listArray.map((data, index) =>{
                  return (
                    <li key={data.listItemId} onClick={()=>addItem(data)}>
                        <input type="checkbox" onChange={()=>{}} id={data.name} checked={data.checked?true:false} />
                        <span htmlFor={data.name}>{data.item}</span>
                    </li>
                    )
                  }
                )
              }
            </ul>
          </div>
          )
        }
      )
    )
  }
  render() {
    return (
       this.itemArr(this.state.itemData, this.props.addItem)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemDataFromStore: state.contact
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: listItem => dispatch(addItem(listItem))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);