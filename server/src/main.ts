import "dotenv/config";
import app from "./app";
import data from "./db.json";

app.get("/api", (req, res) => {
  res.send("The API is available 🧁");
});

app.get("/api/cupcakes", (req, res) => {
  res.json(data.cupcakes);
});

app.get("/api/cupcakes/:id", (req, res) => {
  const idAsInt = Number.parseInt(req.params.id);

  const wantedCupcake = data.cupcakes.find((cupcake) => cupcake.id === idAsInt);

  if (wantedCupcake == null) {
    res.sendStatus(404);
  } else {
    res.json(wantedCupcake);
  }
});

app.get("/api/accessories", (req, res) => {
  res.json(data.accessories);
});

app.get("/api/accessories/:id", (req, res) => {
  const idAsInt = Number.parseInt(req.params.id);

  const wantedAccessory = data.accessories.find(
    (accessory) => accessory.id === idAsInt,
  );

  if (wantedAccessory == null) {
    res.sendStatus(404);
  } else {
    res.json(wantedAccessory);
  }
});

const port = process.env.APP_PORT ?? "3310";

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
