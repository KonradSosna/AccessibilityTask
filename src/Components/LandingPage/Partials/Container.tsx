import { Divider, Grid } from '@mui/material';
import { CSSProperties, memo, PropsWithChildren } from 'react';

type TContainerProps = {
	sx?: CSSProperties;
	direction?: 'row' | 'column';
	className?: string;
	devider?: boolean;
};

const Container = ({
	children,
	sx,
	direction,
	devider,
	...rest
}: PropsWithChildren<TContainerProps>) => {
	return (
		<>
			{devider ? <Divider /> : null}
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
		</>
	);
};

export default memo(Container);
