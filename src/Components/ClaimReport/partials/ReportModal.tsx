import { Grid, Modal, TextField, Typography } from '@mui/material';
import { FC, memo, useState } from 'react';
import { TExpenseItem } from './ExpenseReport';
import FormButton from '../../LandingPage/Partials/Button';
import CloseIcon from '@mui/icons-material/Close';
import ExpenseButton from './ExpenseButton';
import { Styledlabel } from './PersonalDetails';

const modalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 900,
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
	open: boolean;
	handleClose: () => void;
	setShow: (v: boolean) => void;
};

const ReportModal: FC<TReportModalProps> = ({
	expenseArr,
	setExpenseArr,
	open,
	handleClose,
	setShow,
}) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const handleAdd = () => {
		setExpenseArr((prev) => [
			...prev,
			{ id: expenseArr.length + 1, expense: name, amount: price },
		]);
		setShow(true);
		handleClose();
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{ backdropFilter: 'blur(5px)' }}
			>
				<Grid container direction="column" sx={modalStyle}>
					<Grid item width="100%" justifyContent="right" display="flex">
						<ExpenseButton icon={<CloseIcon />} onClick={handleClose} />
					</Grid>

					<Grid item display="flex" justifyContent="center">
						<Typography
							id="expense-modal-title"
							variant="h4"
							component="h2"
							fontWeight={600}
						>
							Expense
						</Typography>
					</Grid>

					<Grid
						container
						direction="column"
						spacing={2}
						sx={{ margin: '10px 0', padding: 'unset' }}
					>
						<Grid item>
							<Styledlabel htmlFor="firstName">Name</Styledlabel>
						</Grid>
						<Grid item>
							<TextField
								placeholder="Enter Expense Name"
								title="firstName"
								type="text"
								value={name}
								style={{ width: '100%', height: '40px' }}
								onChange={(e) => setName(e.target.value)}
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
							<Styledlabel htmlFor="firstName">Price</Styledlabel>
						</Grid>
						<Grid item>
							<TextField
								placeholder="Enter Expense Price"
								title="firstName"
								type="text"
								value={price}
								style={{ width: '100%', height: '40px' }}
								onChange={(e) => setPrice(e.target.value)}
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
							text="add"
							onClick={handleAdd}
							disable={!name || !price}
						/>
					</Grid>
				</Grid>
			</Modal>
		</>
	);
};

export default memo(ReportModal);
