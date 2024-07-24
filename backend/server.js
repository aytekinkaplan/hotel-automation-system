const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

// Mongoose strictQuery ayarını buraya ekleyin
mongoose.set("strictQuery", true);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error("Connection error", error.message);
  });
