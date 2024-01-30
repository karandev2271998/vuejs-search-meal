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

export function serachMealByLetter({ commit }, letter) {
  let endpoint = `/search.php?f=${letter}`;
  axiosClient
    .get(endpoint)
    .then((data) => {
      commit("setSearchedMealByLetter", data.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function serachMealByIngredient({ commit }, ingredient) {
  let endpoint = `/filter.php?i=${ingredient}`;
  axiosClient
    .get(endpoint)
    .then((data) => {
      commit("setSearchedMealByIngredient", data.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
}