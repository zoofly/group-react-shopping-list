import './ItemList.css'

function ItemList(props) {
	return (
		<>
		  <h2>Shopping List</h2>
		  <table>
			<thead>
			  <tr>
				<th>Items</th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
			  {props.list.map(items => (
				<tr key={items.id}>
				  <td>{items.item}</td>
				  <td>{items.quantity}</td>
				  <td>{items.unit}</td>
				  <td><button>Buy</button></td>
				  <td><button>Remove</button></td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</>
	  )
	}


export default ItemList;