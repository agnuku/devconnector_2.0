const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const multer = require("multer");
const http = require("http");
const csv = require("fast-csv");
const config = require("config");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const AmazonMonthPL = require("./models/AmazonMonthPL");

const mongoose = require("mongoose");
const Router = express.Router;
const router = new Router();

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Load the full build.
var _ = require("lodash");

//used to view status of requests. Comment out in Production
app.use(logger("dev"));

// CORS is enabled only for demo. Please dont use this in production unless you know about CORS
app.use(cors());
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/upload-csv", router);

//------------------

const upload = multer({ dest: "tmp/csv/" });
router.post("/", upload.single("file"), async (req, res) => {
  let user = req.body.id;
  console.log("First");
  console.log(user);
  if (!req.file) return res.status(400).send("No files were uploaded.");

  const fileRows = [];
  console.log("Second");
  fs.createReadStream(req.file.path)
    .pipe(csv.parse({ headers: true, ignoreEmpty: true, separator: "\t" }))
    .on("data", function(data) {
      data["_id"] = new mongoose.Types.ObjectId();
      fileRows.push(data);
    })
    .on("end", function() {
      let result = _.map(
        fileRows,
        _.partialRight(_.pick, [
          "_id",
          "amazon-order-id",
          "shipment-date",
          "reporting-date",
          "sku",
          "product-name",
          "quantity-shipped",
          "currency",
          "item-price",
          "item-tax",
          "shipping-price",
          "shipping-tax",
          "gift-wrap-price",
          "gift-wrap-tax",
          "ship-city",
          "ship-state",
          "item-promotion-discount",
          "ship-promotion-discount",
          "fulfillment-channel",
          "sales-channel"
        ])
      );
      console.log("Third");
      revisedResult = _.map(result, function(obj) {
        _.forOwn(obj, (value, key) => {
          // if key has a dash, replace all occurences with an underscore
          if (_.includes(key, "-")) {
            const cleanKey = _.replace(key, /\-/g, "_");
            obj[cleanKey] = value;
            delete obj[key];
          }

          // continue recursively looping through if we have an object or array
          if (_.isObject(value)) {
            return value;
          }
        });
        return obj;
      });

      fs.unlinkSync(req.file.path); // remove temp file
    })
    .on("end", function() {
      console.log("Fourth");
      AmazonMonthPL.findOne({ user: user }).then(amazonmonthpl => {
        if (amazonmonthpl) {
          // Update
          AmazonMonthPL.findOneAndUpdate(
            { user: user },
            { $set: revisedResult },
            { new: true }
          ).then(amazonmonthpl => res.json(amazonmonthpl));
        } else {
          // Save AmazonMonthPL
          new AmazonMonthPL(revisedResult)
            .save()
            .then(amazonmonthpl => res.json(amazonmonthpl));
        }
      });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
