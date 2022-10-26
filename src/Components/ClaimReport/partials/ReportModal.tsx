import { Grid, Modal, TextField, Typography } from '@mui/material';
import { FC, memo, useState } from 'react';
import { TExpenseItem } from './ExpenseReport';
import FormButton from '../../LandingPage/Partials/Button';
import CloseIcon from '@mui/icons-material/Close';
import ExpenseButton from './ExpenseButton';

const modalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 900,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	borderRadius: '15px',
	boxShadow: 24,
	p: 4,
	fontFamily: 'Graphik, sans-serif ',
};

type TReportModalProps = {
	expenseArr: TExpenseItem[];
	setExpenseArr: (value: React.SetStateAction<any[]>) => void;
	edit: boolean;
	open: boolean;
	handleClose: () => void;
	setExpenseAdded: (v: boolean) => void;
	setExpenseEdited: (v: boolean) => void;
	item?: TExpenseItem;
	setItem: (v: React.SetStateAction<TExpenseItem | undefined>) => void;
};

const ReportModal: FC<TReportModalProps> = ({
	expenseArr,
	setExpenseArr,
	edit,
	open,
	handleClose,
	setExpenseAdded,
	setExpenseEdited,
	item: expense,
	setItem,
}) => {
	const [name, setName] = useState(expense?.expense || '');
	const [price, setPrice] = useState(expense?.amount || '');

	const handleAdd = () => {
		setExpenseArr((prev) => [
			...prev,
			{ id: expenseArr.length + 1, expense: name, amount: price },
		]);
		setExpenseAdded(true);
		handleClose();
	};

	const handleEdit = () => {
		const editedExpenseArr = expenseArr.map((item) =>
			item.id === expense?.id
				? { id: item.id, expense: name, amount: price }
				: item
		);
		setExpenseArr(editedExpenseArr);
		setItem(undefined);
		setExpenseEdited(true);
		handleClose();
	};

	return (
		<>
			<Modal
				role="modal"
				open={open}
				onClose={handleClose}
				sx={{ backdropFilter: 'blur(5px)' }}
			>
				<Grid container direction="column" sx={modalStyle}>
					<Grid item width="100%" justifyContent="right" display="flex">
						<ExpenseButton
							ariaLabel="close modal"
							icon={<CloseIcon />}
							onClick={handleClose}
						/>
					</Grid>

					<Grid item display="flex" justifyContent="center">
						<Typography
							id="expense-modal-title"
							role="presentation"
							component="h2"
							fontWeight={600}
						>
							{edit ? 'Edit Expense' : 'Expense'}
						</Typography>
					</Grid>

					<Grid
						container
						direction="column"
						spacing={2}
						sx={{ margin: '10px 0', padding: 'unset' }}
					>
						<Grid item>
							<TextField
								type="text"
								value={name}
								style={{ width: '100%', height: '40px' }}
								onChange={(e) => setName(e.target.value)}
								label="Expense name"
							/>
						</Grid>
					</Grid>

					<Grid
						container
						direction="column"
						spacing={2}
						sx={{ margin: '10px 0', padding: 'unset' }}
					>
						<Grid item>
							<TextField
								type="number"
								value={price}
								style={{ width: '100%', height: '40px' }}
								onChange={(e) => setPrice(e.target.value)}
								label="Expense price"
							/>
						</Grid>
					</Grid>

					<Grid container marginTop="50px" justifyContent="center">
						<FormButton
							variant="contained"
							sx={{
								backgroundColor: 'unset',
								color: 'black',
								border: '1px solid black',
								marginRight: '15px',
							}}
							text="cancel"
							onClick={handleClose}
						/>
						<FormButton
							text={edit ? 'save' : 'add'}
							onClick={edit ? handleEdit : handleAdd}
							disable={!name || !price}
						/>
					</Grid>
				</Grid>
			</Modal>
		</>
	);
};

export default memo(ReportModal);
