import styled from '@emotion/styled';
import { Grid, RadioGroup } from '@mui/material';
import { Dispatch, FC, useState } from 'react';
import FormButton from '../../LandingPage/Partials/Button';

type TIncidentDetailsProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
};

const IncidentDetails: FC<TIncidentDetailsProps> = ({ setValue }) => {
	// const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	// const [policyNumber, setPolicyNumber] = useState('');

	const Styledlabel = styled.label`
		font-size: 18px;
		font-weight: 600;
	`;

	return (
		<Grid container direction="column" spacing={4} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="firstName">Purpose of Travel</Styledlabel>
					</Grid>
					<Grid item>
						<RadioGroup>
							<input type="radio" value="Business" />
							<input type="radio" value="Leisure" />
						</RadioGroup>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="lastName">Country</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="lastName"
							type="text"
							value={lastName}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="birthday">Address</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="birthday"
							value={birthday}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setBirthday(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="phoneNumber">Date</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="phoneNumber"
							type="number"
							value={phoneNumber}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="email">Incident Description</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="email"
							type="text"
							value={email}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setEmail(e.target.value)}
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
