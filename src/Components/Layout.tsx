import { Box, Grid, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const StyledLink = styled(Link)({
	color: 'black',
	textDecoration: 'none',
});

const Layout = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
	};
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				height="60px"
				alignItems="center"
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
							}}
						>
							<StyledLink to="/">
								<ListItemButton
									selected={selectedIndex === 0}
									onClick={(event) => handleListItemClick(event, 0)}
								>
									Insurance
								</ListItemButton>
							</StyledLink>

							<StyledLink to="/about-us">
								<ListItemButton
									selected={selectedIndex === 1}
									onClick={(event) => handleListItemClick(event, 1)}
								>
									About Us
								</ListItemButton>
							</StyledLink>

							<StyledLink to="/claim-report">
								<ListItemButton
									selected={selectedIndex === 2}
									onClick={(event) => handleListItemClick(event, 2)}
								>
									Claim Report
								</ListItemButton>
							</StyledLink>

							<StyledLink to="/contact">
								<ListItemButton
									selected={selectedIndex === 3}
									onClick={(event) => handleListItemClick(event, 3)}
								>
									Contact
								</ListItemButton>
							</StyledLink>
						</List>
					</Box>
				</Grid>
			</Grid>
			<Outlet />
		</>
	);
};

export default Layout;
