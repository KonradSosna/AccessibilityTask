import styled from '@emotion/styled';
import { Grid, TextField } from '@mui/material';
import { Dispatch, FC } from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../../LandingPage/Partials/Button';

export const Styledlabel = styled.label`
	font-size: 18px;
	font-weight: 600;
`;

type TPersonalDetailsProps = {
	trigger: any;
	setValue: Dispatch<React.SetStateAction<number>>;
	register: ReturnType<typeof useForm>['register'];
	errors: any;
};

const PersonalDetails: FC<TPersonalDetailsProps> = ({
	trigger,
	setValue,
	register,
	errors,
}) => {
	return (
		<Grid container direction="column" spacing={6} width="100%">
			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('firstName', { required: true })}
							title="firstName"
							type="text"
							style={{ width: '100%', height: '40px' }}
							error={!!errors.firstName}
							helperText={errors.firstName && 'First name is required'}
							label="First name"
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('lastName', { required: true })}
							title="lastName"
							type="text"
							style={{ width: '100%', height: '40px' }}
							error={!!errors.lastName}
							helperText={errors.lastName && 'Last name is required'}
							label="Last name"
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('birthday', { required: true })}
							title="birthday"
							fullWidth
							id="date"
							type="date"
							error={!!errors.birthday}
							helperText={errors.birthday && 'Birthday is required'}
							label="Birthday"
							InputLabelProps={{
								shrink: true,
							}}
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('phoneNumber', {
								required: true,
							})}
							title="phoneNumber"
							type="number"
							style={{ width: '100%', height: '40px' }}
							InputProps={{ inputProps: { max: 999999999 } }}
							error={!!errors.phoneNumber}
							helperText={errors.phoneNumber && 'Phone number is required'}
							label="Phone number"
							InputLabelProps={{
								shrink: true,
							}}
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('email', { required: true })}
							title="email"
							type="text"
							style={{ width: '100%', height: '40px' }}
							error={!!errors.email}
							helperText={errors.email && 'Email is required'}
							label="Email"
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<TextField
							{...register('policyNumber', { required: true })}
							title="policyNumber"
							type="number"
							style={{ width: '100%', height: '40px' }}
							error={!!errors.policyNumber}
							helperText={errors.policyNumber && 'Policy number is required'}
							label="Policy number"
							InputLabelProps={{
								shrink: true,
							}}
							FormHelperTextProps={{ 'aria-live': 'polite', role: 'alert' }}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid container marginTop="50px" justifyContent="flex-end">
				<FormButton
					text="Continue"
					type="submit"
					onClick={() =>
						trigger().then((isValid: boolean) => isValid && setValue(1))
					}
				/>
			</Grid>
		</Grid>
	);
};

export default PersonalDetails;
