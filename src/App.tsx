import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutUs from './Components/AboutUs';
import ClaimReport from './Components/ClaimReport';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="claim-report" element={<ClaimReport />} />
				<Route path="contact" element={<Contact />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
