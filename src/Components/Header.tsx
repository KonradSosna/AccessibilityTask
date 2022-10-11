import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AboutUs from './AboutUs';
import ClaimReport from './ClaimReport';
import Contact from './Contact';
import Layout from './Layout';

function Header() {
	return (
		<div>
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
		</div>
	);
}

export default Header;
