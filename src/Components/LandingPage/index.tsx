import { Grid, Typography } from '@mui/material';
import Box from './Partials/Box';
import Container from './Partials/Container';
import FormButton from './Partials/Button';
import FormList from './Partials/List';

const LandingPage = ({ isMobile }: { isMobile: boolean }) => {
	return (
		<>
			<Container
				direction="column"
				sx={{
					backgroundColor: '#F2F2F2',
					justifyContent: 'center',
				}}
			>
				<Grid item>
					<Typography
						fontSize={40}
						fontWeight={600}
						textTransform="capitalize"
						textAlign="center"
					>
						Travel insurance
					</Typography>
				</Grid>
				<Grid item>
					<Typography fontSize={20} fontWeight={500} maxWidth="700px">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
						error corporis explicabo labore nobis ea cum doloremque dolorem!
					</Typography>
				</Grid>
				<Grid item>
					<FormButton text="order now" />
				</Grid>
			</Container>

			<Container direction="row">
				<Grid
					item
					sx={{ width: '470px', height: '360px', border: '1px solid black' }}
				></Grid>
				<Grid item>
					<Grid
						container
						direction="column"
						gap={4}
						alignItems={isMobile ? 'center' : 'unset'}
					>
						<Grid item>
							<Typography
								fontSize={22}
								fontWeight={600}
								maxWidth="500px"
								textTransform="capitalize"
							>
								Insurance for Inernational Visitors
							</Typography>
						</Grid>
						<Grid item>
							<Typography fontSize={20} fontWeight={500} maxWidth="500px">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
								error corporis explicabo labore nobis ea cum doloremque dolorem!
							</Typography>
						</Grid>
						<Grid item>
							<FormList />
						</Grid>
					</Grid>
				</Grid>
			</Container>

			<Container direction="row">
				<Grid item>
					<Typography
						fontSize={22}
						fontWeight={600}
						maxWidth="500px"
						textTransform="capitalize"
						m="30px 0"
						display="flex"
						flexDirection="column"
						alignItems={isMobile ? 'center' : 'unset'}
					>
						Safe Travels
					</Typography>

					<Typography fontSize={20} fontWeight={500} maxWidth="500px">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						error provident sunt recusandae nemo ratione est, nisi saepe
						maiores, consequuntur commodi dolorem illo asperiores voluptates
						expedita nobis earum repudiandae exercitationem nihil porro id odit
						cum explicabo?
					</Typography>
				</Grid>

				<Grid
					item
					sx={{ width: '470px', height: '360px', border: '1px solid black' }}
				></Grid>
			</Container>

			<Container
				direction="column"
				sx={{
					justifyContent: 'space-evenly',
					flexWrap: 'nowrap',
				}}
			>
				<Grid item>
					<Typography fontSize={30} fontWeight={600} textTransform="capitalize">
						Explore our travel topics
					</Typography>
				</Grid>

				<Grid item>
					<Grid
						container
						direction="row"
						alignItems={isMobile ? 'center' : 'unset'}
						justifyContent="center"
					>
						<Box text={'renting vacation homes'} />
						<Box text={'trends & predictions'} />
						<Box text={'popular travel destinations for 2021'} />
						<Box text={'popular gear for safe travels in 2021'} />
					</Grid>
				</Grid>
			</Container>

			<Container
				direction="column"
				sx={{
					backgroundColor: '#F2F2F2',
					justifyContent: 'center',
					height: '400px',
				}}
			>
				<Grid item>
					<Typography fontSize={24} fontWeight={500} textTransform="capitalize">
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quam
						harum itaque soluta?""
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						backgroundColor: 'black',
						width: '40px',
						height: '40px',
						borderRadius: '50px',
					}}
				></Grid>
				<Grid item>
					<Typography fontSize={14} fontWeight={500}>
						Donald Duck, CEO of Disney
					</Typography>
				</Grid>
			</Container>

			<Container direction="row">
				<Grid item>
					<Typography
						fontSize={28}
						fontWeight={600}
						maxWidth="500px"
						m="10px 0"
						textAlign="center"
					>
						Are you looking for an insurance?
					</Typography>

					<Typography
						fontSize={20}
						fontWeight={500}
						maxWidth="500px"
						textAlign="center"
					>
						Contact us to order now
					</Typography>
				</Grid>

				<Grid item>
					<Grid container spacing={2} justifyContent="center">
						<Grid item>
							<FormButton
								text="call us"
								variant="contained"
								sx={{
									backgroundColor: 'unset',
									color: 'black',
									border: '1px solid black',
								}}
							/>
						</Grid>
						<Grid item>
							<FormButton text="send a message" />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default LandingPage;
