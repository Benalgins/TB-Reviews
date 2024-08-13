import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../src/components/Context/AuthContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';

function App() {
	return (
		<AuthProvider>
			<>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</>
		</AuthProvider>
	);
}

export default App;
