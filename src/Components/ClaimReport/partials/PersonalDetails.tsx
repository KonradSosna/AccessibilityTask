import styled from '@emotion/styled';
import { Grid, TextField } from '@mui/material';
import { Dispatch, FC } from 'react';
import FormButton from '../../LandingPage/Partials/Button';

export const Styledlabel = styled.label`
	font-size: 18px;
	font-weight: 600;
`;

type TPersonalDetailsProps = {
	setValue: Dispatch<React.SetStateAction<number>>;
	firstName?: string;
	setFirstName: Dispatch<React.SetStateAction<string>>;
	lastName?: string;
	setLastName: Dispatch<React.SetStateAction<string>>;
	birthday?: string;
	setBirthday: Dispatch<React.SetStateAction<string>>;
	email?: string;
	setEmail: Dispatch<React.SetStateAction<string>>;
	phoneNumber?: number;
	setPhoneNumber: Dispatch<React.SetStateAction<number | undefined>>;
	policyNumber?: number;
	setPolicyNumber: Dispatch<React.SetStateAction<number | undefined>>;
};

const PersonalDetails: FC<TPersonalDetailsProps> = ({
	setValue,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	birthday,
	setBirthday,
	email,
	setEmail,
	phoneNumber,
	setPhoneNumber,
	policyNumber,
	setPolicyNumber,
}) => {
	return (
		<Grid container direction="column" spacing={4} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Styledlabel htmlFor="firstName">First name</Styledlabel>
					</Grid>
					<Grid item>
						<TextField
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
						<TextField
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
						<TextField
							value={birthday}
							title="birthday"
							fullWidth
							id="date"
							type="date"
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
						<TextField
							title="phoneNumber"
							type="number"
							value={phoneNumber}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setPhoneNumber(Number(e.target.value))}
							InputProps={{ inputProps: { max: 999999999 } }}
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
						<TextField
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
						<TextField
							title="policyNumber"
							type="number"
							value={policyNumber}
							style={{ width: '100%', height: '40px' }}
							onChange={(e) => setPolicyNumber(Number(e.target.value))}
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
