import './ItemForm.css';
import {useState} from 'react';

// Idea from creatures for the form
function ItemForm ({addNewItem}) {
    
    let [newItemName, setNewItem] = useState('');
    let [newItemQuant, setItemQuant]= useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
    let [newItemPurchase, setNewItemPurchase] = useState(false);

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log('New Item is', newItemName);
        console.log('New item quant is', newItemQuant);
        console.log('New item unit is', newItemUnit);

        const newItem = {
            item: newItemName,
            quantity: Number(newItemQuant),
            unit: newItemUnit,
            //purchase: newItemPurchase === "True" ? true : false
        };
        console.log(newItem);

        //pass the new item to the DB via app component
        addNewItem (newItem);

        setNewItem('');
        setItemQuant('');
        setNewItemUnit('');
    }

return (
    <>
<h2>Add an Item</h2>
<form onSubmit={handleSubmit}>
  <label htmlFor="item">Item:</label>
  <input value={newItemName} id="item" onChange={ (event) => setNewItem(event.target.value) } />
  <label htmlFor="quantity">Quantity:</label>
  <input value={newItemQuant} id="quantity" onChange={ (event) => setItemQuant(event.target.value) } />
  <label htmlFor="unit">Unit:</label>
  <input value={newItemUnit} id="unit" onChange={ (event) => setNewItemUnit(event.target.value) } />
  <button type="submit">Add New Item</button>
</form>
</>
	);
}


export default ItemForm;
