import axiosClient from "../axios";
export function searchMeal({ commit }, keyword) {
  let endpoint = `/search.php?s=${keyword}`;
  axiosClient
    .get(endpoint)
    .then((data) => {
      commit("setSearchedMeals", data.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
}
