import { Button, Grid, List, ListItem, Typography } from '@mui/material';

const Box = ({ text }: { text: string }) => {
	return (
		<Grid item>
			<Grid
				container
				direction="column"
				gap={4}
				xs={3}
				justifyContent="space-evenly"
			>
				<Grid
					item
					sx={{
						width: '250px',
						height: '250px',
						backgroundColor: 'black',
					}}
				></Grid>
				<Grid
					item
					sx={{
						textTransform: 'capitalize',
						fontSize: '20px',
						flexWrap: 'wrap',
					}}
				>
					{text}
				</Grid>
			</Grid>
		</Grid>
	);
};

const LandingPage = () => {
	return (
		<>
			<Grid
				container
				direction="column"
				gap={3}
				sx={{
					height: '700px',
					backgroundColor: '#F2F2F2',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid item>
					<Typography fontSize={40} fontWeight={600} textTransform="capitalize">
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
					<Button
						variant="contained"
						sx={{
							backgroundColor: 'black',
							width: '200px',
							height: '50px',
							textTransform: 'capitalize',
							fontSize: '15px',
						}}
					>
						order now
					</Button>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				gap={3}
				sx={{
					height: '700px',
					width: '100%',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Grid
					item
					sx={{ width: '470px', height: '360px', border: '1px solid black' }}
				></Grid>
				<Grid item>
					<Grid container direction="column" gap={4}>
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
							<List sx={{ fontSize: '24px' }}>
								<ListItem sx={{ listStyleType: 'disc', display: 'list-item' }}>
									List item #1
								</ListItem>
								<ListItem sx={{ listStyleType: 'disc', display: 'list-item' }}>
									List item #2
								</ListItem>
								<ListItem sx={{ listStyleType: 'disc', display: 'list-item' }}>
									List item #3
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				gap={3}
				sx={{
					height: '700px',
					width: '100%',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Grid item>
					<Typography
						fontSize={22}
						fontWeight={600}
						maxWidth="500px"
						textTransform="capitalize"
						m="30px 0"
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
			</Grid>

			<Grid
				container
				direction="column"
				gap={2}
				sx={{
					width: '100%',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Grid item>
					<Typography
						fontSize={30}
						fontWeight={600}
						maxWidth="500px"
						textTransform="capitalize"
						marginBottom={5}
					>
						Explore our travel topics
					</Typography>
				</Grid>

				<Grid item>
					<Grid container direction="row" gap={4}>
						<Box text={'renting vacation homes'} />
						<Box text={'trends & predictions'} />
						<Box text={'popular travel destinations for 2021'} />
						<Box text={'popular gear for safe travels in 2021'} />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default LandingPage;
