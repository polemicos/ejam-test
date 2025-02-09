// Server entry point, port set to 5000 by default
import app from "./src/app";

// Setting up the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});

export default app;
