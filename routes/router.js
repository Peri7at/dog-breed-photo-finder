import Router from "@koa/router";
const router = Router();
import * as DogController from "../controllers/dogs.js";

router.get("/pictures", DogController.getDogBreedPics);
router.get("/breedslist", DogController.getDogBreedsList);
router.get("/random", DogController.getRandomPicture);

export default router;
