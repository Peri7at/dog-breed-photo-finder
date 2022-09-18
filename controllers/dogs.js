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
      ctx.throw(404, "Breed not found");
    }
    let pictures = apiResponseJson.message;
    await ctx.render("pictures", { pictures });
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message,
    };
  }
}
