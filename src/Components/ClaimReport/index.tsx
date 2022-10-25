import {
	Alert,
	Box,
	Grid,
	Snackbar,
	styled,
	Tab,
	Tabs,
	Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../LandingPage/Partials/Container';
import ExpenseReport, { TExpenseItem } from './partials/ExpenseReport';
import IncidentDetails from './partials/IncidentDetails';
import PersonalDetails from './partials/PersonalDetails';

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

function Claimreport({ isMobile }: { isMobile: boolean }) {
	const StyledTab = styled(Tab)({
		color: 'black',
		fontSize: '16px',
		backgroundColor: '#C4C4C4',
		borderRadius: '15px',
		margin: `${!isMobile ? '0 30px' : '0 10px'} `,
		padding: `${!isMobile ? '0 45px' : '0 10px'} `,
		textTransform: 'capitalize',

		'&.Mui-selected': {
			backgroundColor: 'black',
			color: 'white',
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm();
	const [, setData] = useState('');

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
	const [confirmReport, setConfirmReport] = useState(false);

	const [expenseArr, setExpenseArr] = useState<TExpenseItem[]>(
		JSON.parse(localStorage.getItem('expenseArr') || '[]')
	);

	const submitForm = async (data: any) => {
		await setData(JSON.stringify(data));

		await setLoading(true);
		await setTimeout(() => {
			console.log(data);
			setConfirmReport(true);
			setLoading(false);
		}, 2000);
	};

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		console.log(newValue);
		if (newValue > value)
			trigger().then((isValid: boolean) => isValid && setValue(newValue));
		else setValue(newValue);
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
					<Typography
						fontWeight="600"
						fontSize="30px"
						marginBottom="35px"
						variant="h1"
					>
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
							sx={{
								width: '100%',
								justifyContent: 'space-between',
								flexWrap: 'wrap',
							}}
						>
							<StyledTab label="Step 1 - Personal Details" {...a11yProps(0)} />
							<StyledTab label="Step 2 - Incident Details" {...a11yProps(1)} />
							<StyledTab label="Step 3 - Expense Report" {...a11yProps(2)} />
						</Tabs>
					</Box>
				</Grid>

				<Grid item style={{ width: '100%', maxWidth: '850px' }}>
					<form onSubmit={handleSubmit((data) => submitForm(data))}>
						<TabPanel value={value} index={0}>
							<PersonalDetails
								trigger={trigger}
								setValue={setValue}
								register={register}
								errors={errors}
							/>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<IncidentDetails
								trigger={trigger}
								setValue={setValue}
								register={register}
								isMobile={isMobile}
								errors={errors}
							/>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<ExpenseReport
								register={register}
								setValue={setValue}
								expenseArr={expenseArr}
								setExpenseArr={setExpenseArr}
								loading={loading}
								isMobile={isMobile}
							/>
						</TabPanel>
					</form>
				</Grid>
			</Grid>

			<Snackbar
				open={confirmReport}
				autoHideDuration={6000}
				onClose={() => setConfirmReport(false)}
				aria-live="polite"
			>
				<Alert
					onClose={() => setConfirmReport(false)}
					severity="success"
					sx={{ width: '100%' }}
					role="status"
				>
					Report Subbmitted!
				</Alert>
			</Snackbar>
		</Container>
	);
}

export default memo(Claimreport);
