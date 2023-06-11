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
		return products;
	};

	//2 Delete
	const deleteProduct = async (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};
	//3 Insert
	const addProduct = async (product) => {
		product['id'] = products.length + 1;
		setProducts([...products, product]);
		setShowAddProduct(false);
	};

	//4 toggle form
	const [showAddProduct, setShowAddProduct] = useState(false);

	const onEdit = async (product) => {
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
