import { Button } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';
import { FC, memo } from 'react';

type TButtonProps = {
	text: string;
	variant?: 'contained' | 'outlined' | 'text';
	sx?: CSSProperties;
	onClick?: (v: any) => void;
};

const FormButton: FC<TButtonProps> = ({ text, variant, sx, onClick }) => {
	return (
		<Button
			onClick={onClick}
			variant={variant ? variant : 'contained'}
			sx={{
				backgroundColor: 'black',
				width: '200px',
				height: '50px',
				textTransform: 'capitalize',
				fontSize: '15px',
				...sx,

				'&:hover': {
					backgroundColor: 'gray',
				},
			}}
		>
			{text}
		</Button>
	);
};

export default memo(FormButton);
