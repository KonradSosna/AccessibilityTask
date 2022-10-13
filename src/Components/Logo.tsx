import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

const StyledTypography = styled(Typography)`
	font-weight: 700;
	font-size: 26px;
`;

function Logo() {
	return (
		<Grid container gap={2} alignItems="center">
			<StyledTypography>The Insurer</StyledTypography>
			<div
				style={{
					backgroundColor: 'gray',
					width: '40px',
					height: '40px',
					borderRadius: '50px',
				}}
			></div>
		</Grid>
	);
}

export default Logo;
