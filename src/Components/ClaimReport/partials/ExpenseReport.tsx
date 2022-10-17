import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { Dispatch, FC, memo, useEffect, useState } from 'react';
import FormButton from '../../LandingPage/Partials/Button';
import ExpenseButton from './ExpenseButton';
import { Styledlabel } from './PersonalDetails';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportModal from './ReportModal';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

type TExpenseReportProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
	submitForm: () => void;
	expenseArr: TExpenseItem[];
	setExpenseArr: Dispatch<React.SetStateAction<TExpenseItem[]>>;
	loading: boolean;
};

export type TExpenseItem = { id: string; expense: string; amount: string };

const ExpenseReport: FC<TExpenseReportProps> = ({
	setValue,
	submitForm,
	expenseArr,
	setExpenseArr,
	loading,
}) => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);

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
	};

	console.log(loading);

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
									/>
									<ExpenseButton icon={<ModeIcon />} />
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
					setShow={setShow}
				/>
			)}

			{show && (
				<Snackbar
					open={show}
					autoHideDuration={6000}
					onClose={() => setShow(false)}
				>
					<Alert
						onClose={() => setShow(false)}
						severity="success"
						sx={{ width: '100%' }}
					>
						New expense added!
					</Alert>
				</Snackbar>
			)}

			<Grid container marginTop="50px" justifyContent="space-between">
				<FormButton
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
				<FormButton text="submit" onClick={submitForm} />
				<LoadingButton
					loading={loading}
					loadingPosition="start"
					startIcon={<SaveIcon />}
					variant="outlined"
					onClick={submitForm}
				>
					Save111
				</LoadingButton>
			</Grid>
		</Grid>
	);
};

export default memo(ExpenseReport);
