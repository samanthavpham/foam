const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://host.docker.internal:27017/foam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const runSchema = new mongoose.Schema({
  url: String,
  lastModified: String,
  foam: {
    type: Boolean,
    enum: [null, true, false],
  },
});

const Run = mongoose.model("Run", runSchema);
module.exports = Run;
