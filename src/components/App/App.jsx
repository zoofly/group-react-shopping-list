import React, { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

function App() {
    let [itemList, setItemList] = useState([]);
    let [newItemName, setNewItem] = useState('');
    let [newItemQuant, setItemQuant]= useState('');
    let [newItemUnitemList, setNewItemUnit] = useState('');
    let [newItemPurchase, setNewItemPurchase] = useState('');

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
            console.log(response)
            console.log(response.data)
            // setItemList(response.data);
          }).catch( (error) => {
            alert('Error getting items!')
            console.log(error)
          });
        }
  
    //POST REQUEST
    const addItem = () =>{
        axios({
            type: "POST",
            url: '/list',
            data: {
                item: newItemName,
                quantity: newItemQuant,
                unit: newItemUnit,
                purchase: newItemPurchase
            }
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
