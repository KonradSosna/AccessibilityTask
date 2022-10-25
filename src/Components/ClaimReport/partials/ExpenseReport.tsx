import { Grid, Typography } from '@mui/material';
import { Dispatch, FC, memo, useEffect, useState } from 'react';
import FormButton from '../../LandingPage/Partials/Button';
import ExpenseButton from './ExpenseButton';
import { Styledlabel } from './PersonalDetails';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportModal from './ReportModal';
import { useForm } from 'react-hook-form';
import Toast from 'src/Components/Toast';

type TExpenseReportProps = {
	register: ReturnType<typeof useForm>['register'];
	setValue: Dispatch<React.SetStateAction<number>>;
	expenseArr: TExpenseItem[] | [];
	setExpenseArr: Dispatch<React.SetStateAction<TExpenseItem[]>>;
	loading: boolean;
	isMobile: boolean;
};

export type TExpenseItem = { id: string; expense: string; amount: string };

const ExpenseReport: FC<TExpenseReportProps> = ({
	setValue,
	expenseArr,
	setExpenseArr,
	loading,
	isMobile,
}) => {
	const [open, setOpen] = useState(false);
	const [edit, setEdit] = useState(false);
	const [expenseAdded, setExpenseAdded] = useState(false);
	const [expenseDeleted, setExpenseDeleted] = useState(false);
	const [expenseEdited, setExpenseEdited] = useState(false);
	const [item, setItem] = useState<TExpenseItem | undefined>();

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setEdit(false);
	};

	useEffect(() => {
		localStorage.setItem('expenseArr', JSON.stringify(expenseArr));
	}, [expenseArr]);

	const handleDelete = (id: string) => {
		const newArr = expenseArr.filter((item) => item.id !== id);
		setExpenseArr(newArr);
		setExpenseDeleted(true);
	};

	const handleEdit = (expense: TExpenseItem) => {
		setItem(expense);
		setEdit(true);
		setOpen(true);
	};

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
						<Styledlabel style={{ fontSize: '16px' }}>
							Expense report
						</Styledlabel>
					</Grid>
					{expenseArr?.map((expense) => (
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
										ariaLabel={`delete-expense-${expense.expense}`}
									/>
									<ExpenseButton
										icon={<ModeIcon />}
										onClick={() => handleEdit(expense)}
										ariaLabel={`edit-expense-${expense.expense}`}
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
						text="Add another expense"
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
					edit={edit}
					open={open}
					handleClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					setExpenseAdded={setExpenseAdded}
					setExpenseEdited={setExpenseEdited}
					item={item}
					setItem={setItem}
				/>
			)}

			<Toast
				message="New expense added!"
				open={expenseAdded}
				onClose={() => setExpenseAdded(false)}
				toastType="success"
			/>

			<Toast
				message="Expense deleted"
				open={expenseDeleted}
				onClose={() => setExpenseDeleted(false)}
				toastType="success"
			/>

			<Toast
				message="Expense edited"
				open={expenseEdited}
				onClose={() => setExpenseEdited(false)}
				toastType="success"
			/>

			<Grid
				container
				marginTop="50px"
				justifyContent={isMobile ? 'center' : 'space-between'}
				alignItems="center"
			>
				<FormButton
					loading={loading}
					variant="contained"
					sx={{
						backgroundColor: 'unset',
						color: 'black',
						border: '1px solid black',
						marginLeft: `${isMobile ? 'unset' : '32px'}`,
						marginRight: `${isMobile ? '10px' : 'unset'}`,
					}}
					text="return"
					onClick={() => setValue(1)}
				/>
				<FormButton text="submit" type="submit" loading={loading} />
			</Grid>
		</Grid>
	);
};

export default memo(ExpenseReport);
