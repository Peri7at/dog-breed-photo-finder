import Router from "@koa/router";
const router = Router();
import * as DogController from "../controllers/dogs.js";

router.get("/", DogController.getAllDogs);
router.get("/breeds", DogController.getDogBreeds);

export default router;
