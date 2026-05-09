import { frontendLog } from "./utils/logger";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent
} from "@mui/material";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitNotification = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/notifications",
        {
          title,
          message
        }
      );

      console.log(response.data);

      alert("Notification Created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Notification System
          </Typography>

          <TextField
            fullWidth
            label="Title"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            fullWidth
            label="Message"
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={submitNotification}
            style={{ marginTop: "20px" }}
          >
            Send Notification
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;