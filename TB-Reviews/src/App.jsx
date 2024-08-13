import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../src/components/Context/AuthContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';
import CreateReview from './components/CreateReview/CreateReview';

function App() {
	return (
		<AuthProvider>
			<>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/login" element={<Login />} />
					<Route path="/create" element={<CreateReview />} />
				</Routes>
			</>
		</AuthProvider>
	);
}

export default App;
