import { Grid, ListItem, List, Typography } from '@mui/material';
import Container from './LandingPage/Partials/Container';
import Logo from './Logo';

function Footer({ isMobile }: { isMobile: boolean }) {
	return (
		<Container
			className="footer"
			sx={{
				backgroundColor: '#F2F2F2',
				justifyContent: 'space-around',
				minHeight: '400px',
			}}
			direction={isMobile ? 'column' : 'row'}
		>
			<Grid
				item
				xs={5}
				sx={{
					justifyContent: 'center',
					height: '100%',
					paddingLeft: '70px',
					paddingTop: '70px',
				}}
			>
				<Logo />
			</Grid>

			<Grid item xs={5}>
				<Grid container gap={3} justifyContent="center">
					<Grid item>
						<List
							aria-label="footer navigation bar"
							sx={{
								listStyleType: 'none',
								textTransform: 'capitalize',
								cursor: 'pointer',
								width: '100%',
							}}
						>
							<ListItem>
								<Typography fontWeight={600} margin="10px 0">
									about us
								</Typography>
							</ListItem>
							<ListItem>newsroom</ListItem>
							<ListItem>caareers</ListItem>
							<ListItem>our story</ListItem>
							<ListItem>customer stories</ListItem>
						</List>
					</Grid>
					<Grid item>
						<List
							aria-label="footer navigation bar"
							sx={{
								listStyleType: 'none',
								textTransform: 'capitalize',
								cursor: 'pointer',
								flexWrap: 'wrap',
								width: '170px',
							}}
						>
							<ListItem>
								<Typography fontWeight={600} margin="10px 0">
									procusts
								</Typography>
							</ListItem>
							<ListItem>vacation / holidays</ListItem>
							<ListItem>student / scholar</ListItem>
							<ListItem>mission</ListItem>
							<ListItem>marine capitan / crew</ListItem>
							<ListItem>employer / buisness traveler</ListItem>
						</List>
					</Grid>
					<Grid item>
						<List
							aria-label="footer navigation bar"
							sx={{
								listStyleType: 'none',
								textTransform: 'capitalize',
								cursor: 'pointer',
							}}
						>
							<ListItem>
								<Typography fontWeight={600} margin="10px 0">
									member
								</Typography>
							</ListItem>
							<ListItem>forms library</ListItem>
							<ListItem>find a doctor</ListItem>
							<ListItem>renew policy</ListItem>
							<ListItem>claims center</ListItem>
						</List>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Footer;
