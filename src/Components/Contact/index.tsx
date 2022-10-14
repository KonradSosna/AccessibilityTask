import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import Container from '../LandingPage/Partials/Container';

function Contact() {
	return (
		<Container
			direction="column"
			devider
			sx={{
				justifyContent: 'center',
			}}
		>
			<Grid item>
				<Typography fontSize={40} fontWeight={600} textTransform="capitalize">
					contact
				</Typography>
			</Grid>
			<Grid item>
				<Typography fontSize={20} fontWeight={500} maxWidth="700px">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis error
					corporis explicabo labore nobis ea cum doloremque dolorem!
				</Typography>
			</Grid>
		</Container>
	);
}

export default memo(Contact);
