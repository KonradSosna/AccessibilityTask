import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

const StyledTypography = styled(Typography)`
	font-weight: 700;
	font-size: 25px;
`;

function Logo() {
	return (
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
	);
}

export default Logo;
