import fetch from "isomorphic-fetch";

export async function getDogBreedPics(ctx, next) {
  try {
    let breed = ctx.query.breed;
    if (breed == "") {
      ctx.throw(500, "Please enter a dog breed");
    }
    const apiResponse = await fetch(
      "https://dog.ceo/api/breed/" + breed + "/images"
    );
    const apiResponseJson = await apiResponse.json();
    if (apiResponseJson.status == "error") {
      ctx.throw(404, "Breed not found!");
    }
    let pictures = apiResponseJson.message;
    await ctx.render("pictures", { pictures });
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = `<div style="position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)"><h1 style='text-align: center'>Oops, Sorry :( ${err.message} <br> Go to <a href='http://localhost:3011/breedslist'>available breeds list<a></h1></div`;
  }
}

export async function getDogBreedsList(ctx, next) {
  try {
    const apiResponse = await fetch("https://dog.ceo/api/breeds/list/all");
    const apiResponseJson = await apiResponse.json();
    if (apiResponseJson.status == "error") {
      ctx.throw(404, "List not found!");
    }
    let breedsList = Object.keys(apiResponseJson.message);
    await ctx.render("list", { list: breedsList });
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = `<div style="position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)"><h1 style='text-align: center'>Oops, Sorry :( ${err.message} <br> Go to <a href='http://localhost:3011'>home page<a></h1></div`;
  }
}

export async function getRandomPicture(ctx, next) {
  try {
    const apiResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    const apiResponseJson = await apiResponse.json();
    if (apiResponseJson.status == "error") {
      ctx.throw(404, "Picture not found!");
    }
    let randomPicture = apiResponseJson.message;
    await ctx.render("random", { random: randomPicture });
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = `<div style="position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)"><h1 style='text-align: center'>Oops, Sorry :( ${err.message} <br> Go to <a href='http://localhost:3011'>home page<a></h1></div`;
  }
}
