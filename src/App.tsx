import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';
import ClaimReport from './Components/ClaimReport';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { useMediaQuery, useTheme } from '@mui/material';
import NavbarMobile from './Components/NavbarMobile';

function App() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div className="App">
			{!isMobile ? <Navbar /> : <NavbarMobile />}

			<Routes>
				<Route
					path="/AccessibilityTask/insurance"
					element={<LandingPage isMobile={isMobile} />}
				/>
				<Route path="/AccessibilityTask/about-us" element={<AboutUs />} />
				<Route
					path="/AccessibilityTask/claim-report"
					element={<ClaimReport isMobile={isMobile} />}
				/>
				<Route path="/AccessibilityTask/contact" element={<Contact />} />
			</Routes>

			<Footer isMobile={isMobile} />
		</div>
	);
}

export default App;
