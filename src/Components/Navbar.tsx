import styled from '@emotion/styled';
import { Box, Grid, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const StyledLink = styled(Link)({
	color: 'black',
	textDecoration: 'none',
});

const Navbar = () => {
	const location = useLocation();
	const [selectedIndex, setSelectedIndex] = useState(location.pathname);

	const handleListItemClick = (
		_event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: string
	) => {
		setSelectedIndex(index);
	};
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			height="70px"
			alignItems="center"
			padding="0 120px"
		>
			<Grid item>
				<Logo />
			</Grid>

			<Grid item>
				<Box
					sx={{
						width: '100%',
						maxWidth: 500,
						bgcolor: 'background.paper',
					}}
				>
					<List
						component="nav"
						aria-label="main navigation bar"
						sx={{
							display: 'flex',
							flexDirection: 'row',
							fontWeight: 500,
						}}
					>
						<StyledLink to="/">
							<ListItemButton
								selected={selectedIndex === '/'}
								onClick={(event) => handleListItemClick(event, '/')}
							>
								Insurance
							</ListItemButton>
						</StyledLink>

						<StyledLink to="/about-us">
							<ListItemButton
								selected={selectedIndex === '/about-us'}
								onClick={(event) => handleListItemClick(event, '/about-us')}
							>
								About us
							</ListItemButton>
						</StyledLink>

						<StyledLink to="/claim-report">
							<ListItemButton
								selected={selectedIndex === '/claim-report'}
								onClick={(event) => handleListItemClick(event, '/claim-report')}
							>
								Claim report
							</ListItemButton>
						</StyledLink>

						<StyledLink to="/contact">
							<ListItemButton
								selected={selectedIndex === '/contact'}
								onClick={(event) => handleListItemClick(event, '/contact')}
							>
								Contact
							</ListItemButton>
						</StyledLink>
					</List>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Navbar;
