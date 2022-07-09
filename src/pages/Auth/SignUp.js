import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkMui from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import 'firebase/compat/auth';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { LogoImage } from '~/assets/images';
import { useUserAuth } from '~/context/UserAuthContext';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const theme = createTheme({
    typography: {
        htmlFontSize: 10
    },
});

const LongButton = styled(Button)({
    width: "70%",
    minWidth: "312px",
    height: 45,
    borderRadius: 22,
    textTransform: "none",
    fontSize: "1.6rem",

})

// const uiConfig = {
//     signInFlow: 'redirect',
//     signInsuccessUrl: '/',
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
// };

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
]

export default function SignUp() {
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        setError("");
        try {
            await signUp(value.email, value.password);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmedPassword: '',
            userName: '',
            day: '',
            month: '',
            year: '',
            gender: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
                .required('Email is required'),
            password: Yup
                .string()
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,18}$/, 'Invalid password')
                .required('You need to enter a password.'),
            // Minimum eight and maximum 18 characters, at least one uppercase letter, one lowercase letter, one number and one special character
            confirmedPassword: Yup
                .string()
                .oneOf([Yup.ref("password"), null], "Password must match")
                .required('You need to confirm your email.'),
            userName: Yup
                .string()
                .required('Enter a name for your profile'),
            day: Yup.string().required('Enter a valid day'),
            month: Yup.string().required('Select your birth month'),
            year: Yup.string().matches(/^(19|20)[\d]{2,2}$/, 'Invalid year').required('Enter a valid year'),
            gender: Yup.string().required('Select your gender')
        }),
        onSubmit: handleSubmit
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main"
                maxWidth="sm"
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Link to="/">
                        <IconButton sx={{ color: '#000' }} disableRipple>
                            <LogoImage height="40px" />
                        </IconButton>
                    </Link>
                    <Typography component="div" fontSize="3.2rem" fontWeight={700} mt={5} textAlign="center">
                        Sign up for free to start listening
                    </Typography>

                    {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}

                    <Divider sx={{ width: 0.9, mt: 3 }}>or</Divider>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="What's your email?"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    // autoFocus
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="Create a password"
                                    name="password"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="Confirm your password"
                                    name="confirmedPassword"
                                    id="confirmedPassword"
                                    value={formik.values.confirmedPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.confirmedPassword && Boolean(formik.errors.confirmedPassword)}
                                    helperText={formik.touched.confirmedPassword && formik.errors.confirmedPassword}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="userName"
                                    fullWidth
                                    id="userName"
                                    label="What should we call you?"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                                    helperText={formik.touched.userName && formik.errors.userName ? formik.errors.userName : 'This appears on your profile'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">What's your date of birth?</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Day"
                                    name="day"
                                    id="day"
                                    placeholder='DD'
                                    value={formik.values.day}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.day && Boolean(formik.errors.day)}
                                    helperText={formik.touched.day && formik.errors.day}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Month"
                                    name="month"
                                    id="month"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    value={formik.values.month}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.month && Boolean(formik.errors.month)}
                                    helperText={formik.touched.month && formik.errors.month}
                                >
                                    {months.map((month, index) => (
                                        <option key={index} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    label="Year"
                                    name="year"
                                    id="year"
                                    placeholder='YYYY'
                                    value={formik.values.year}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.year && Boolean(formik.errors.year)}
                                    helperText={formik.touched.year && formik.errors.year}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl error={Boolean(formik.errors.gender)}>
                                    <FormLabel id="gender">What's your gender?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="gender"
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="non" control={<Radio />} label="Non-binary" />
                                    </RadioGroup>
                                    <FormHelperText>{formik.errors.gender}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I would prefer not to receive marketing messages from Spotify"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Share my registration data with Spotify's content providers for marketing purposes."
                                />
                            </Grid>
                        </Grid>
                        {error && <Alert severity="warning">{error}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                Already have an account? &nbsp;
                                <LinkMui component={Link} to="/login">
                                    Log in
                                </LinkMui>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}
