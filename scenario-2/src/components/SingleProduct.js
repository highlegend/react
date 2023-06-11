import { FaTimes, FaEdit } from 'react-icons/fa';
const SingleProduct = ({ product, onDelete, setProductEdit }) => {
	return (
		<tr>
			<td>{product.name}</td>
			<td>{product.description}</td>
			<td>{product.price}</td>
			<td>{product.category}</td>
			<td>
				<FaEdit style={{ color: 'gray' }} onClick={() => setProductEdit(product)} />
				<FaTimes style={{ color: 'red' }} onClick={() => onDelete(product.id)} />
			</td>
		</tr>
	);
};

export default SingleProduct;
