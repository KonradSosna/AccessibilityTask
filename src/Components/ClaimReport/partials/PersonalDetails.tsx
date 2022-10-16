import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Dispatch, FC, useState } from 'react';
import FormButton from '../../LandingPage/Partials/Button';

type TPersonalDetailsProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
};

const PersonalDetails: FC<TPersonalDetailsProps> = ({ setValue }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [policyNumber, setPolicyNumber] = useState('');

	const Styledlabel = styled.label`
		font-size: 18px;
		font-weight: 600;
	`;

	return (
		<Grid container direction="column" spacing={4} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="firstName">First name</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="firstName"
							type="text"
							value={firstName}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="lastName">Last name</Styledlabel>
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
						<Styledlabel htmlFor="birthday">Birthday</Styledlabel>
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
						<Styledlabel htmlFor="phoneNumber">Phone number</Styledlabel>
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
						<Styledlabel htmlFor="email">Email</Styledlabel>
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

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="policyNumber">Policy number</Styledlabel>
					</Grid>
					<Grid item>
						<input
							title="policyNumber"
							type="number"
							value={policyNumber}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setPolicyNumber(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid container marginTop="50px" justifyContent="flex-end">
				<FormButton text="Continue" onClick={() => setValue(1)} />
			</Grid>
		</Grid>
	);
};

export default PersonalDetails;
