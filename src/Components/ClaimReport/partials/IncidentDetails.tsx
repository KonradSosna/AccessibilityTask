import {
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { Dispatch, FC } from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../../LandingPage/Partials/Button';

type TIncidentDetailsProps = {
	trigger: any;
	setValue: Dispatch<React.SetStateAction<number>>;
	register: ReturnType<typeof useForm>['register'];
	isMobile: boolean;
	errors: any;
};

const IncidentDetails: FC<TIncidentDetailsProps> = ({
	trigger,
	setValue,
	register,
	isMobile,
	errors,
}) => {
	return (
		<Grid container direction="column" spacing={6} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<legend style={{ fontSize: '18px', fontWeight: 600 }}>
							Purpose of Travel
						</legend>
					</Grid>
					<Grid item>
						<RadioGroup
							{...register('travelPurpose')}
							title="travelPurpose"
							aria-label="radio-buttons-group-travel-purpose"
							defaultValue="tourism"
							name="radio-buttons-group"
						>
							<FormControlLabel
								value="tourism"
								control={<Radio />}
								label="tourism"
							/>
							<FormControlLabel
								value="study"
								control={<Radio />}
								label="study / mental work"
							/>
							<FormControlLabel
								value="physicalWork"
								control={<Radio />}
								label="physical work"
							/>
							<FormControlLabel
								value="sport"
								control={<Radio />}
								label="high-risk sport"
							/>
						</RadioGroup>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('country', { required: true })}
							title="country"
							type="text"
							style={{
								width: '100%',
								height: '40px',
							}}
							label="Country"
							error={!!errors.country}
							helperText={errors.country && 'Country  is required'}
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('address', { required: true })}
							title="address"
							type="text"
							style={{ width: '100%', height: '40px' }}
							label="Address"
							error={!!errors.address}
							helperText={errors.address && 'Address  is required'}
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<TextField
					{...register('date', { required: true })}
					title="date"
					fullWidth
					id="date"
					type="date"
					InputLabelProps={{
						shrink: true,
					}}
					label="Date"
					error={!!errors.date}
					helperText={errors.date && 'Date  is required'}
					FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
				/>
			</Grid>

			<Grid item>
				<Grid item>
					<TextField
						{...register('description', { required: true })}
						title="description"
						type="text"
						style={{ width: '100%' }}
						inputProps={{ maxLength: 1999 }}
						multiline
						rows={7}
						label="Description"
						error={!!errors.description}
						helperText={errors.description && 'Description  is required'}
						FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
					/>
				</Grid>
			</Grid>

			<Grid
				container
				marginTop="50px"
				justifyContent={isMobile ? 'center' : 'space-between'}
				alignItems="center"
			>
				<FormButton
					variant="contained"
					sx={{
						backgroundColor: 'unset',
						color: 'black',
						border: '1px solid black',
						marginLeft: `${isMobile ? 'unset' : '32px'}`,
						marginRight: `${isMobile ? '10px' : 'unset'}`,
					}}
					text="return"
					onClick={() => setValue(0)}
				/>
				<FormButton
					text="continue"
					onClick={() =>
						trigger().then((isValid: boolean) => isValid && setValue(2))
					}
				/>
			</Grid>
		</Grid>
	);
};

export default IncidentDetails;
