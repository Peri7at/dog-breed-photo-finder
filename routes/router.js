import Router from "@koa/router";
const router = Router();
import * as DogController from "../controllers/dogs.js";

router.get("/pictures", DogController.getDogBreedPics);

export default router;
