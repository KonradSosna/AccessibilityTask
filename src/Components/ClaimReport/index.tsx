import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import Container from '../LandingPage/Partials/Container';
import ClaimForm from './ClaimForm';

function Claimreport() {
	return (
		<Container devider>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				p="90px 0"
			>
				<Grid item>
					<Typography fontWeight="600" fontSize="30px">
						Claim report
					</Typography>
				</Grid>

				<Grid item>NavBar</Grid>

				<Grid item>
					<ClaimForm />
				</Grid>
			</Grid>
		</Container>
	);
}

export default memo(Claimreport);
