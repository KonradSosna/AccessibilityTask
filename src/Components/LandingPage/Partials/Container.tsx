import { Grid } from '@mui/material';
import { CSSProperties, memo, PropsWithChildren } from 'react';

type TContainerProps = {
	sx?: CSSProperties;
	direction?: 'row' | 'column';
	className?: string;
};

const Container = ({
	children,
	sx,
	direction,
	...rest
}: PropsWithChildren<TContainerProps>) => {
	return (
		<Grid
			container
			direction={direction ? direction : 'row'}
			gap={3}
			sx={{
				height: '700px',
				width: '100%',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				...sx,
			}}
			{...rest}
		>
			{children}
		</Grid>
	);
};

export default memo(Container);
