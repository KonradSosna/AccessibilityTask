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
import { Styledlabel } from './PersonalDetails';

type TIncidentDetailsProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
	register: ReturnType<typeof useForm>['register'];
};

const IncidentDetails: FC<TIncidentDetailsProps> = ({ setValue, register }) => {
	return (
		<Grid container direction="column" spacing={4} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="travelPurpose">Purpose of Travel</Styledlabel>
					</Grid>
					<Grid item>
						<RadioGroup
							{...register('travelPurpose')}
							title="travelPurpose"
							aria-labelledby="demo-radio-buttons-group-label"
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
							{...register('country')}
							title="country"
							type="text"
							style={{
								width: '100%',
								height: '40px',
							}}
							label="Country"
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('address')}
							title="address"
							type="text"
							style={{ width: '100%', height: '40px' }}
							label="Address"
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column">
					<TextField
						{...register('date')}
						title="date"
						fullWidth
						id="date"
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
						label="Date"
					/>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item></Grid>
					<Grid item>
						<TextField
							{...register('description')}
							title="description"
							type="text"
							style={{ width: '100%', height: '180px' }}
							inputProps={{ maxLength: 1999 }}
							multiline
							rows={7}
							label="Description"
						/>
					</Grid>
				</Grid>
			</Grid>

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
					onClick={() => setValue(0)}
				/>
				<FormButton text="continue" onClick={() => setValue(2)} />
			</Grid>
		</Grid>
	);
};

export default IncidentDetails;
