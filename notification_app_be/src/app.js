const express = require("express");
const cors = require("cors");

const Log = require("../../logging_middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "route",
      "Root route accessed"
    );

    res.status(200).json({
      message: "Backend Running Successfully"
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

app.post("/notifications", async (req, res) => {
  try {
    const { title, message } = req.body;

    await Log(
      "backend",
      "info",
      "controller",
      `Notification created: ${title}`
    );

    res.status(201).json({
      success: true,
      notification: {
        id: Date.now(),
        title,
        message
      }
    });
  } catch (error) {
    console.log(error);

    await Log(
      "backend",
      "error",
      "handler",
      error.message
    );

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});