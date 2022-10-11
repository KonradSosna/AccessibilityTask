import { Grid, Typography } from '@mui/material';

const LandingPage = () => {
	return (
		<Grid container>
			<Grid
				item
				sx={{
					height: '400px',
					backgroundColor: 'gray',
					width: '100%',
				}}
			>
				<Typography>Travel insurance</Typography>
			</Grid>
		</Grid>
	);
};

export default LandingPage;
