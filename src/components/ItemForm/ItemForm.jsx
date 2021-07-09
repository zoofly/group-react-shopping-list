import './ItemForm.css';
import {useState} from 'react';

// Idea from creatures for the form
function ItemForm () {
    
    let [newItemName, setNewItem] = useState('');
    let [newItemQuant, setItemQuant]= useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
    let [newItemPurchase, setNewItemPurchase] = useState('');

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log('New Item is', newItemName);
        console.log('New item quant is', newItemQuant);
        console.log('New item unit is', newItemUnit);

        const newItem = {
            item: newItemName,
            quantity: newItemQuant,
            unit: newItemUnit,
            purchase: newItemPurchase
        };
        console.log(newItem);

        //pass the new item to the DB via app component
        addNewItem (newItem);
    }

return (
    <>
<h2>Add an Item</h2>
<form onSubmit={handleSubmit}>
  <label for="item">Item:</label>
  <input id="item" onChange={ (event) => setNewItem(event.target.value) } />
  <label for="quantity">Quantity:</label>
  <input id="quantity" onChange={ (event) => setItemQuant(event.target.value) } />
  <label for="unit">Unit:</label>
  <input id="unit" onChange={ (event) => setNewItemUnit(event.target.value) } />
  <button type="submit">Add New Creature</button>
</form>
</>
	);
}


export default ItemForm;
