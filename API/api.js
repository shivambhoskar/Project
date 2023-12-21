const url = "https://shoes-collections.p.rapidapi.com/shoes";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8cbffa3fc2mshbbd0454fe321fd1p1edeb6jsnfbaceb66e9ec",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
