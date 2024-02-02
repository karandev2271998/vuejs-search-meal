export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setSearchedMealByLetter(state, meals) {
  state.searchedMealsByLetter = meals || [];
}

export function setSearchedMealByIngredient(state, meals) {
  state.searchedMealsByIngredient = meals || [];
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient || {}
}
