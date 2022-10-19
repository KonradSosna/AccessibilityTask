import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './Navbar';

const StyledTypography = styled(Typography)`
	font-weight: 700;
	font-size: 25px;
`;

function Logo() {
	const location = useLocation();

	return (
		<StyledLink
			to="/"
			style={{
				cursor: location.pathname === '/insurance' ? 'default' : 'pointer',
			}}
		>
			<Grid container gap={2} alignItems="center">
				<StyledTypography>The Insurer</StyledTypography>
				<div
					style={{
						backgroundColor: '#c4c4c4',
						width: '48px',
						height: '48px',
						borderRadius: '50px',
					}}
				></div>
			</Grid>
		</StyledLink>
	);
}

export default Logo;
