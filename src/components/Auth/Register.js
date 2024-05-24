import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, InputLabel, Input, FormControl, FormLabel, Checkbox, FormControlLabel } from '@mui/material';
import api from '../../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isIndividual, setIsIndividual] = useState(false);
  const [isProvider, setIsProvider] = useState(false);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [files, setFiles] = useState([]);
  const [filetype] = useState('application/jpg'); // Set this to the desired static value

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('Password', password);
      formData.append('IsIndivitual', isIndividual);
      formData.append('IsProvider', isProvider);
      formData.append('City', city);
      formData.append('Country', country);
      formData.append('Street', street);
      formData.append('PostalCode', postalCode);
      formData.append('Filetype', filetype); // Include the static filetype value

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('FileDetails', file);
      }

      const response = await api.post('Accounts/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
 // Check if the response status is success

  alert(response.data.message);


} catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ width: '100%', maxWidth: '800px' }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">User Type</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={isIndividual} onChange={(e) => setIsIndividual(e.target.checked)} />}
              label="Individual"
            />
            <FormControlLabel
              control={<Checkbox checked={isProvider} onChange={(e) => setIsProvider(e.target.checked)} />}
              label="Provider"
            />
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="country"
            label="Country"
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="street"
            label="Street"
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="postalCode"
            label="Postal Code"
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <InputLabel htmlFor="file" sx={{ mt: 2 }}>
            Upload Files
          </InputLabel>
          <Input
            id="file"
            name="file"
            type="file"
            accept=".pdf, .jpg"
            inputProps={{ multiple: true }}
            fullWidth
            onChange={(e) => setFiles(e.target.files)}
            sx={{ mt: 1, mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;