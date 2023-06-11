import { useState } from 'react';

const initialValue = {
	name: '',
	description: '',
	price: '',
	category: '',
};

const AddProduct = ({ onAdd, onEdit, productEdit }) => {
	const [fields, setFields] = useState(productEdit ? productEdit : initialValue);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!fields.name || !fields.description || !fields.price || !fields.category) {
			alert('Please fill all the fields');
			return;
		}

		if (productEdit) {
			onEdit(fields);
		} else {
			onAdd(fields);
		}

		setFields(initialValue);
	};
	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Product Name</label>
				<input
					type="text"
					placeholder="Add Product Name"
					value={fields.name}
					onChange={(e) => setFields({ ...fields, name: e.target.value })}
				/>
			</div>
			<div className="form-control">
				<label>Product Description</label>
				<input
					type="text"
					placeholder="Add Product Description"
					value={fields.description}
					onChange={(e) => setFields({ ...fields, description: e.target.value })}
				/>
			</div>
			<div className="form-control">
				<label>Product Price</label>
				<input
					type="text"
					placeholder="Add Product Price"
					value={fields.price}
					onChange={(e) => setFields({ ...fields, price: e.target.value })}
				/>
			</div>
			<div className="form-control">
				<label>Product Category</label>
				<input
					type="text"
					placeholder="Add Product Category"
					value={fields.category}
					onChange={(e) => setFields({ ...fields, category: e.target.value })}
				/>
			</div>
			<input type="submit" className="btn btn-warning" value="Save Product" />
		</form>
	);
};
export default AddProduct;
