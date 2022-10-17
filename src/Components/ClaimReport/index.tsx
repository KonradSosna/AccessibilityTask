import { Box, Grid, styled, Tab, Tabs, Typography } from '@mui/material';
import { memo, useState } from 'react';
import Container from '../LandingPage/Partials/Container';
import ExpenseReport, { TExpenseItem } from './partials/ExpenseReport';
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
					<div>{children}</div>
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
	const [loading, setLoading] = useState(false);

	//Use context to pass the value to the child components
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phoneNumber, setPhoneNumber] = useState<number>();
	const [email, setEmail] = useState('');
	const [policyNumber, setPolicyNumber] = useState<number>();

	const [travelPurpose, setTravelPurpose] = useState('tourism');
	const [country, setCountry] = useState('');
	const [address, setAddress] = useState('');
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');

	const [expenseArr, setExpenseArr] = useState<TExpenseItem[]>(
		JSON.parse(localStorage.getItem('expenseArr') || '')
	);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const submitForm = async () => {
		const reportObj = {
			firstName,
			lastName,
			birthday,
			phoneNumber,
			email,
			policyNumber,
			travelPurpose,
			country,
			address,
			date,
			description,
			expenseArr,
		};

		await setLoading(true);
		await setTimeout(() => {
			alert(JSON.stringify(reportObj));
			setLoading(false);
		}, 2000);
	};

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
							<PersonalDetails
								setValue={setValue}
								firstName={firstName}
								setFirstName={setFirstName}
								lastName={lastName}
								setLastName={setLastName}
								birthday={birthday}
								setBirthday={setBirthday}
								phoneNumber={phoneNumber}
								setPhoneNumber={setPhoneNumber}
								email={email}
								setEmail={setEmail}
								policyNumber={policyNumber}
								setPolicyNumber={setPolicyNumber}
							/>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<IncidentDetails
								setValue={setValue}
								travelPurpose={travelPurpose}
								setTravelPurpose={setTravelPurpose}
								country={country}
								setCountry={setCountry}
								address={address}
								setAddress={setAddress}
								date={date}
								setDate={setDate}
								description={description}
								setDescription={setDescription}
							/>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<ExpenseReport
								setValue={setValue}
								submitForm={submitForm}
								expenseArr={expenseArr}
								setExpenseArr={setExpenseArr}
								loading={loading}
							/>
						</TabPanel>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
}

export default memo(Claimreport);
