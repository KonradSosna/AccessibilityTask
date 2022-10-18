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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [data, setData] = useState('');

	const [value, setValue] = useState(2);
	const [loading, setLoading] = useState(false);
	const [confirmReport, setConfirmReport] = useState(false);

	const [expenseArr, setExpenseArr] = useState<TExpenseItem[]>(
		JSON.parse(localStorage.getItem('expenseArr') || '')
	);

	const submitForm = async (data1: any) => {
		console.log(data);
		if (data1 === 1) {
			if (Object.keys(errors).length === 0) setValue(1);
		} else if (data1 === 3) {
			await setData(JSON.stringify(data));

			await setLoading(true);
			await setTimeout(() => {
				console.log(data);
				setConfirmReport(true);
				setLoading(false);
			}, 2000);
		}
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
					<form onSubmit={handleSubmit(() => submitForm({}))}>
						<TabPanel value={value} index={0}>
							<PersonalDetails
								setValue={setValue}
								register={register}
								submitForm={submitForm}
								errors={errors}
							/>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<IncidentDetails setValue={setValue} register={register} />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<ExpenseReport
								register={register}
								setValue={setValue}
								expenseArr={expenseArr}
								setExpenseArr={setExpenseArr}
								loading={loading}
								submitForm={submitForm}
							/>
						</TabPanel>
					</form>
				</Grid>
			</Grid>

			{confirmReport && (
				<Snackbar
					open={confirmReport}
					autoHideDuration={6000}
					onClose={() => setConfirmReport(false)}
				>
					<Alert
						onClose={() => setConfirmReport(false)}
						severity="success"
						sx={{ width: '100%' }}
					>
						Report Subbmitted!
					</Alert>
				</Snackbar>
			)}
		</Container>
	);
}

export default memo(Claimreport);
