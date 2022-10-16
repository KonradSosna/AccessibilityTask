import { Box, Grid, styled, Tab, Tabs, Typography } from '@mui/material';
import { memo, useState } from 'react';
import Container from '../LandingPage/Partials/Container';
import ExpenseReport from './partials/ExpenseReport';
import IncidentDetails from './partials/IncidentDetails';
import PersonalDetails from './partials/PersonalDetails';

const StyledTab = styled(Tab)({
	color: 'black',
	fontSize: '16px',
	backgroundColor: '#C4C4C4',
	borderRadius: '15px',
	margin: '0 30px',
	padding: '0 45px',
	textTransform: 'capitalize',
	'&.Mui-selected': {
		backgroundColor: 'black',
		color: 'white',
	},
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`claim-report-tabpanel-${index}`}
			aria-labelledby={`claim-report-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `claim-report-tab-${index}`,
		'aria-controls': `claim-report-tab-${index}`,
	};
}

function Claimreport() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const submitForm = () => {};

	return (
		<Container devider sx={{ height: '100%' }}>
			<Grid
				container
				direction="column"
				justifyContent="start"
				alignItems="center"
				height="100%"
				p="80px 0"
				spacing={2}
				flexWrap="nowrap"
			>
				<Grid item>
					<Typography fontWeight="600" fontSize="30px" marginBottom="35px">
						Claim report
					</Typography>
				</Grid>

				<Grid item marginBottom="20px">
					<Box>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
							variant="scrollable"
							sx={{ width: '100%', justifyContent: 'space-between' }}
						>
							<StyledTab label="Step 1 - Personal Details" {...a11yProps(0)} />
							<StyledTab label="Step 2 - Incident Details" {...a11yProps(1)} />
							<StyledTab label="Step 3 - Expense Report" {...a11yProps(2)} />
						</Tabs>
					</Box>
				</Grid>

				<Grid item style={{ width: '100%', maxWidth: '850px' }}>
					<form onSubmit={submitForm}>
						<TabPanel value={value} index={0}>
							<PersonalDetails setValue={setValue} />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<IncidentDetails setValue={setValue} />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<ExpenseReport />
						</TabPanel>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
}

export default memo(Claimreport);
