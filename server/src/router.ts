import express from "express";

const router = express.Router();

export const cupcakes = [
	{
		id: 1,
		name: "Austria",
		accessory: "chocolate",
		color1: "red",
		color2: "white",
		color3: "red",
	},
	{
		id: 2,
		name: "Belgium",
		accessory: "chocolate",
		color1: "black",
		color2: "yellow",
		color3: "red",
	},
];

/* ************************************************************************* */
router.get("/api/cupcakes", (req, res) => {
	res.json(cupcakes);
});
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
