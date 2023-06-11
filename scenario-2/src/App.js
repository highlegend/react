import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Layout from './Layout';

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</Layout>
	);
}
