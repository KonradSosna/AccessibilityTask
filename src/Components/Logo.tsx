import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledTypography = styled(Typography)({
	fontWeight: 'bold',
	fontSize: '24px',
	fontFamily:
		'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
});

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
