import { Box, Grid, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const StyledLink = styled(Link)({
	color: 'black',
	textDecoration: 'none',
});

const Navbar = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
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
								About us
							</ListItemButton>
						</StyledLink>

						<StyledLink to="/claim-report">
							<ListItemButton
								selected={selectedIndex === 2}
								onClick={(event) => handleListItemClick(event, 2)}
							>
								Claim report
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
	);
};

export default Navbar;
