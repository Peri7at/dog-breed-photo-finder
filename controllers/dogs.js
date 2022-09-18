import fetch from "isomorphic-fetch";

export async function getDogBreedPics(ctx, next) {
  try {
    let breed = ctx.query.breed;
    const apiResponse = await fetch(
      "https://dog.ceo/api/breed/" + breed + "/images"
    );
    const apiResponseJson = await apiResponse.json();
    let pictures = apiResponseJson.message;
    await ctx.render("pictures", { pictures });
  } catch (error) {
    console.log(error);
  }
}
