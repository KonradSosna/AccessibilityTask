import { Button } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';
import { FC, memo } from 'react';

type TButtonProps = {
	text: string;
	variant?: 'contained' | 'outlined' | 'text';
	sx?: CSSProperties;
};

const FormButton: FC<TButtonProps> = ({ text, variant, sx }) => {
	return (
		<Button
			variant={variant ? variant : 'contained'}
			sx={{
				backgroundColor: 'black',
				width: '200px',
				height: '50px',
				textTransform: 'capitalize',
				fontSize: '15px',
				...sx,
			}}
		>
			{text}
		</Button>
	);
};

export default memo(FormButton);
