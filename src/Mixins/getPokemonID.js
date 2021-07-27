export function getPokeIdFromURL(url) {
  let urlSplit = url.split(process.env.REACT_APP_API_DOMAIN + "pokemon");
  let pokemonId = urlSplit[1].replace("/", "");
  return pokemonId.split("/")[0];
}
