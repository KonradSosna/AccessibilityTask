import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutUs from './Components/AboutUs';
import ClaimReport from './Components/ClaimReport';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<LandingPage />} />
						<Route path="about-us" element={<AboutUs />} />
						<Route path="claim-report" element={<ClaimReport />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
