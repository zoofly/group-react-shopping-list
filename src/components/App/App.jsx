import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../Header/Header.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import './App.css';

function App() {
    let [itemList, setItemList] = useState([]);
    // let [newItemName, setNewItem] = useState('');
    // let [newItemQuant, setItemQuant]= useState('');
    // let [newItemUnit, setNewItemUnit] = useState('');
    // let [newItemPurchase, setNewItemPurchase] = useState('False');

    useEffect(() => {
        console.log("in useEffect");
        getItems();
      }, []);
    
    // GET REQUEST
    const getItems = () => {
        axios({
            method: 'GET',
            url: '/list',
          }).then( (response) => {
            console.log('Get working');
            console.log(response.data)
            setItemList(response.data);
          }).catch( (error) => {
            alert('Error getting items!')
            console.log(error)
          });
        }
  
    //POST REQUEST
    const handleSubmit = (newItem) => {



        console.log(newItem);
            // axios({
            //   type: "POST",
            //     url: '/list',
            //     data: {
            //         item: newItem.item,
            //         quantity: newItem.quantity,
            //         unit: newItem.unit,
            //         //purchase: newItem.purchase
            //     },

            // }) 
            axios.post('/list', { item: newItem.item, quantity: newItem.quantity, unit: newItem.unit, purchase: newItem.purchase})
            .then( (response)=>{
                console.log('POST response', response);
                getItems();            
            }) .catch( (error)=> {
                console.log ('POST error', error);
            });
        }
    
    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm addNewItem={handleSubmit} />
                <ItemList list={itemList} />
                
            </main>
        </div>
    );
}

export default App;
