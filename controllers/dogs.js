import fetch from "isomorphic-fetch";

export async function getAllDogs(ctx, next) {
  try {
    ctx.body = "HEY!";
  } catch (error) {
    console.log(error);
  }
}

export async function getDogBreeds(ctx, next) {
  try {
    const id = "hound"; //ctx.params.id;
    const apiResponse = await fetch(
      "https://dog.ceo/api/breed/" + id + "/images/random/3"
    );
    const apiResponseJson = await apiResponse.json();
    console.log(apiResponseJson);
    ctx.body = apiResponseJson;
  } catch (error) {
    console.log(error);
  }
  // fetch("https://dog.ceo/api/breeds/list/all")
  //   .then(function (response) {
  //     if (response.status >= 400) {
  //       throw new Error("Bad response from server");
  //     }
  //     return response.json();
  //   })
  //   .then(function (dogBreeds) {
  //     console.log(dogBreeds);
  //   });
}
