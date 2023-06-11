import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import ManyProducts from './components/ManyProducts';

export default function Products() {
	//1 - Global
	const [products, setProducts] = useState([]);
	const [productEdit, setProductEdit] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			const productFromServer = await fetchProducts();
			setProducts(productFromServer);
		};
		getProducts();
	}, []);

	const fetchProducts = async () => {
		const res = await fetch('http://localhost:5000/products');
		const data = await res.json();
		return data;
	};

	const fetchProduct = async (id) => {
		const res = await fetch(`http://localhost:5000/products/${id}`);
		const data = await res.json();
		return data;
	};

	//2 Delete
	const deleteProduct = async (id) => {
		//console.log(id)
		await fetch(`http://localhost:5000/products/${id}`, {
			method: 'DELETE',
		});
		setProducts(products.filter((product) => product.id !== id));
	};
	//3 Insert
	const addProduct = async (product) => {
		const res = await fetch('http://localhost:5000/products', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(product),
		});
		const newProduct = await res.json();
		setProducts([...products, newProduct]);
		setShowAddProduct(false);
	};

	//4 toggle form
	const [showAddProduct, setShowAddProduct] = useState(false);

	const onEdit = async (product) => {
		await fetch(`http://localhost:5000/products/${product.id}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(product),
		});

		const newProducts = products.map((productMap) => {
			if (productMap.id === product.id) {
				productMap = product;
			}

			return productMap;
		});

		setShowAddProduct(false);
		setProducts(newProducts);
		setProductEdit(null);
	};

	useEffect(() => {
		if (productEdit) {
			setShowAddProduct(true);
		}
	}, [productEdit]);

	return (
		<div className="products">
			<Header
				showAdd={showAddProduct}
				onAdd={() => {
					setShowAddProduct(!showAddProduct);
					setProductEdit(null);
				}}
			/>

			{showAddProduct && <AddProduct onEdit={onEdit} onAdd={addProduct} productEdit={productEdit} />}
			{products.length > 0 ? (
				<ManyProducts products={products} onDeleteMany={deleteProduct} setProductEdit={setProductEdit} />
			) : (
				'No products'
			)}
		</div>
	);
}
