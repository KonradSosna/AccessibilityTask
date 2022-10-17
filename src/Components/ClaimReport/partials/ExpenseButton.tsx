import { Button } from '@mui/material';
import { FC, memo } from 'react';
import Avatar from '@mui/material/Avatar';

type TButtonProps = {
	icon?: any;
	variant?: 'contained' | 'outlined' | 'text';
	onClick?: (v: any) => void;
};

const ExpenseButton: FC<TButtonProps> = ({ icon, variant, onClick }) => {
	return (
		<Avatar>
			<Button
				onClick={onClick}
				variant={variant ? variant : 'contained'}
				sx={{
					backgroundColor: '#C4C4C4',
					color: 'black',
					height: '50px',
					margin: '0 5px',

					'&:hover': {
						backgroundColor: 'gray',
					},
				}}
			>
				{icon}
			</Button>
		</Avatar>
	);
};

export default memo(ExpenseButton);
