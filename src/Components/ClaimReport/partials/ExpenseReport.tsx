import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { Dispatch, FC, memo, useEffect, useState } from 'react';
import FormButton from '../../LandingPage/Partials/Button';
import ExpenseButton from './ExpenseButton';
import { Styledlabel } from './PersonalDetails';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportModal from './ReportModal';
import { useForm } from 'react-hook-form';

type TExpenseReportProps = {
	register: ReturnType<typeof useForm>['register'];
	setValue: Dispatch<React.SetStateAction<number>>;
	expenseArr: TExpenseItem[];
	setExpenseArr: Dispatch<React.SetStateAction<TExpenseItem[]>>;
	loading: boolean;
	submitForm: (v: any) => void;
};

export type TExpenseItem = { id: string; expense: string; amount: string };

const ExpenseReport: FC<TExpenseReportProps> = ({
	register,
	setValue,
	expenseArr,
	setExpenseArr,
	loading,
	submitForm,
}) => {
	const [open, setOpen] = useState(false);
	const [expenseAdded, setExpenseAdded] = useState(false);
	const [expenseDeleted, setExpenseDeleted] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		localStorage.setItem('expenseArr', JSON.stringify(expenseArr));
	}, [expenseArr]);

	const handleDelete = (id: string) => {
		const newArr = expenseArr.filter((item) => item.id !== id);
		setExpenseArr(newArr);
		setExpenseDeleted(true);
	};

	// function a11yProps(index: string) {
	// 	return {
	// 		id: `expense-list-item-${index}`,
	// 		'aria-controls': `expense-list-item-${index}`,
	// 		'aria-label': `expense-list-item-${index}`,
	// 	};
	// }

	return (
		<Grid
			container
			direction="column"
			spacing={2}
			width="100%"
			style={{ margin: 'unset', padding: 'unset' }}
		>
			<Grid item>
				<Grid container direction="column">
					<Grid item sx={{ marginBottom: '20px' }}>
						<Styledlabel style={{ fontSize: '16px' }} htmlFor="travelPurpose">
							Expense report
						</Styledlabel>
					</Grid>
					{expenseArr.map((expense) => (
						<Grid
							container
							key={expense.id}
							spacing={2}
							justifyContent="space-between"
						>
							<Grid item display="flex" margin="20px 0">
								<Typography fontWeight={600} marginRight="30px">
									{'$ ' + expense.amount}
								</Typography>
								{expense.expense}
							</Grid>
							<Grid item>
								<Grid container gap={2}>
									<ExpenseButton
										icon={<DeleteOutlineIcon />}
										onClick={() => handleDelete(expense.id)}
										ariaLabel={`delete-item-${expense.id}`}
									/>
									<ExpenseButton
										icon={<ModeIcon />}
										ariaLabel={`edit-item-${expense.id}`}
									/>
								</Grid>
							</Grid>
						</Grid>
					))}
				</Grid>
				<Grid
					item
					xs={12}
					justifyContent="right"
					display="flex"
					margin="10px 0"
				>
					<FormButton
						text="+ Add another expense"
						onClick={handleOpen}
						variant="contained"
						sx={{
							backgroundColor: 'unset',
							color: 'black',
							border: 'none',
							fontSize: '16px',
							fontWeight: 700,
							width: 'fit-content',
						}}
					/>
				</Grid>
			</Grid>

			{open && (
				<ReportModal
					expenseArr={expenseArr}
					setExpenseArr={setExpenseArr}
					open={open}
					handleClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					setExpenseAdded={setExpenseAdded}
				/>
			)}

			{expenseAdded && (
				<Snackbar
					open={expenseAdded}
					autoHideDuration={6000}
					onClose={() => setExpenseAdded(false)}
				>
					<Alert
						onClose={() => setExpenseAdded(false)}
						severity="success"
						sx={{ width: '100%' }}
					>
						New expense added!
					</Alert>
				</Snackbar>
			)}
			{expenseDeleted && (
				<Snackbar
					open={expenseDeleted}
					autoHideDuration={6000}
					onClose={() => setExpenseDeleted(false)}
				>
					<Alert
						onClose={() => setExpenseDeleted(false)}
						severity="success"
						sx={{ width: '100%' }}
					>
						Expense deleted
					</Alert>
				</Snackbar>
			)}

			<Grid container marginTop="50px" justifyContent="space-between">
				<FormButton
					loading={loading}
					variant="contained"
					sx={{
						backgroundColor: 'unset',
						color: 'black',
						border: '1px solid black',
						marginLeft: '32px',
					}}
					text="return"
					onClick={() => setValue(1)}
				/>
				<FormButton
					text="submit"
					type="submit"
					loading={loading}
					onClick={() => submitForm(3)}
				/>
			</Grid>
		</Grid>
	);
};

export default memo(ExpenseReport);