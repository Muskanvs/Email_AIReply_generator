import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!emailContent.trim()) {
      setError('Please enter email content before generating.');
      return;
    }

    setLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });

      // Handle both text and object responses
      const data =
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data, null, 2);

      setGeneratedReply(data);
    } catch (error) {
      console.error('Error generating email reply:', error);
      setError('Failed to generate email reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ my: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="tone-label">Tone (optional)</InputLabel>
          <Select
            labelId="tone-label"
            value={tone}
            label="Tone (optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              backgroundColor: '#fafafa',
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Generated Reply:
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ mb: 2 }}
            />

            <Button
              variant="outlined"
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
