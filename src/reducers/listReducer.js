import {
  ADD_LIST,
  REMOVE_LIST,
  } from "../Constant/types";
  
  const intialState = {
    contacts: [
      {
        id: 1,
        name: "Portugal",
        listArray: [
          {
            parentId: 1,
            listItemId: 1,
            item: "Aayia Jayavant",
            checked: false
          },
          {
            parentId: 1,
            listItemId: 2,
            item: "Luvleen lawrance",
            checked: false
          },
          {
            parentId: 1,
            listItemId: 3,
            item: "Cayla Brister",
            checked: false
          }

        ]
      },
      {
        id: 2,
        name: "Nicaragua",
        listArray: [
          {
            parentId: 2,
            listItemId: 1,
            item: "Devedass nandi",
            checked: false
          },
          {
            parentId: 2,
            listItemId: 2,
            item: "Obasyy Cgidy",
            checked: false
          },
          {
            parentId: 2,
            listItemId: 3,
            item: "Xenie Dolazola",
            checked: false
          }

        ]
      }
    ],
    // contact: null,
    selectedContacts: [],
  };
  
  export const listReducer = (state = intialState, action, data) => {
    switch (action.type) {
      case ADD_LIST:
        const id=action.payload.listItemId;
        const pId=action.payload.parentId;
        let data = {...state};
        const name = data.contacts[pId-1].name;
        // Checkbox
        if(data.contacts[pId-1].listArray[id-1].checked)
          data.contacts[pId-1].listArray[id-1].checked= false;
        else
          data.contacts[pId-1].listArray[id-1].checked = true;

        // add item when check
        const pIndex = data.selectedContacts.findIndex(x => x.name == name);
        if((pIndex == -1) && (action.payload.checked == true)){
          let selectedItemArr = [];
          data.selectedContacts.push({name: name, selectedListArray: selectedItemArr.concat(action.payload)});
        }else if((pIndex != -1) && (action.payload.checked == true)){
          const pIndex = data.selectedContacts.findIndex(x => x.name == name);
          data.selectedContacts[pIndex].selectedListArray.push(action.payload);
        }

        // remove item when uncheck
        if(action.payload.checked == false){
          const liIndex = data.selectedContacts[pIndex].selectedListArray.findIndex(x => x.listItemId == action.payload.listItemId);
          data.selectedContacts[pIndex].selectedListArray.splice(liIndex, 1);
          if(data.selectedContacts[pIndex].selectedListArray.length == 0){
            data.selectedContacts.splice(pIndex, 1);
          }
        }

        return {
          ...state,
       };
      case REMOVE_LIST:
          let stateData = {...state};
          const pName = stateData.contacts[action.payload.parentId-1].name;
          const index = stateData.selectedContacts.findIndex(x => x.name == pName);
          const pIndexAll = stateData.contacts.findIndex(x => x.id == action.payload.parentId);
          const lIndex = stateData.selectedContacts[index].selectedListArray.findIndex(x => x.listItemId == action.payload.listItemId);
          console.log(stateData.selectedContacts[index].selectedListArray);
          stateData.contacts[pIndexAll].listArray[action.payload.listItemId-1].checked=false;
          stateData.selectedContacts[index].selectedListArray.splice(lIndex, 1)
          if(stateData.selectedContacts[index].selectedListArray.length == 0){
            stateData.selectedContacts.splice(index, 1);
          }
        return {
          ...state,
        };
      default:
        return state;
    }
  };
