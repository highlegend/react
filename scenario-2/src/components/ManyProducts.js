import SingleProduct from './SingleProduct';

const ManyProducts = ({ products, onDeleteMany, setProductEdit }) => {
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Category</th>
				<th>Price</th>
				<th>Actions</th>
			</tr>
			{products.map((product) => (
				<SingleProduct
					product={product}
					key={product.id}
					onDelete={onDeleteMany}
					setProductEdit={setProductEdit}
				/>
			))}
		</table>
	);
};

export default ManyProducts;
