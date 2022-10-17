import {
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { Dispatch, FC } from 'react';
import FormButton from '../../LandingPage/Partials/Button';
import { Styledlabel } from './PersonalDetails';

type TIncidentDetailsProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
	travelPurpose?: string;
	setTravelPurpose: Dispatch<React.SetStateAction<string>>;
	country?: string;
	setCountry: Dispatch<React.SetStateAction<string>>;
	address?: string;
	setAddress: Dispatch<React.SetStateAction<string>>;
	date?: string;
	setDate: Dispatch<React.SetStateAction<string>>;
	description?: string;
	setDescription: Dispatch<React.SetStateAction<string>>;
};

const IncidentDetails: FC<TIncidentDetailsProps> = ({
	setValue,
	travelPurpose,
	setTravelPurpose,
	country,
	setCountry,
	address,
	setAddress,
	date,
	setDate,
	description,
	setDescription,
}) => {
	return (
		<Grid container direction="column" spacing={4} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="travelPurpose">Purpose of Travel</Styledlabel>
					</Grid>
					<Grid item>
						<RadioGroup
							title="travelPurpose"
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue={travelPurpose}
							name="radio-buttons-group"
							onChange={(e) => setTravelPurpose(e.target.value)}
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
						<Styledlabel htmlFor="country">Country</Styledlabel>
					</Grid>
					<Grid item>
						<TextField
							title="country"
							type="text"
							value={country}
							style={{
								width: '100%',
								height: '40px',
							}}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="address">Address</Styledlabel>
					</Grid>
					<Grid item>
						<TextField
							title="address"
							type="text"
							value={address}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column">
					<Grid item marginBottom="10px">
						<Styledlabel>Date</Styledlabel>
					</Grid>
					<TextField
						value={date}
						fullWidth
						id="date"
						type="date"
						onChange={(e) => setDate(e.target.value)}
					/>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="email">Incident Description</Styledlabel>
					</Grid>
					<Grid item>
						<TextField
							title="email"
							type="text"
							value={description}
							style={{ width: '100%', height: '180px' }}
							onChange={(e) => setDescription(e.target.value)}
							inputProps={{ maxLength: 1999 }}
							multiline
							rows={7}
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
