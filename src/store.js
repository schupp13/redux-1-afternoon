
import {createStore} from 'redux';


const initialState = {
  recipeName: '',
  recipeCategory: '',
  authorsFirstName: '',
  authorsLastName: '',
  ingredients: [],
  instructions: [],
  recipes:[]
};

export const UPDATE_NAME ="UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export const UPDATE_AUTHOR_FIRSTNAME = "UPDATE_AUTHOR_FIRSTNAME";
export const UPDATE_AUTHOR_LASTNAME = "UPDATE_AUTHOR_LASTNAME";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";

export const ADD_RECIPE = "ADD_RECIPE";





function reducer(state = initialState, action){
  const {payload, type} = action;
  switch (type) {
case UPDATE_NAME:
  return {...state, recipeName: payload}
    case UPDATE_CATEGORY:
      return {...state, recipeCategory: payload}
    case UPDATE_AUTHOR_LASTNAME:
      return {...state, authorsLastName: payload}
      case UPDATE_AUTHOR_FIRSTNAME:
        return {...state, authorsFirstName: payload}
        case ADD_INGREDIENT:
          const newIngredients = [...state.ingredients, payload]
          return {...state,ingredients: newIngredients}
          case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload]
            return{...state,instructions: newInstructions}
            case ADD_RECIPE:
                const {
                  recipeName,
                  recipeCategory,
                  authorsFirstName,
                  authorsLastName,
                  ingredients,
                  instructions
                } = state;
                const recipe = {
                  recipeName,
                  recipeCategory,
                  authorsFirstName,
                  authorsLastName,
                  ingredients,
                  instructions
                };
                const newRecipes = [...state.recipes, recipe];
                return {...initialState, recipes: newRecipes }

    default: 
    return state;
  }
}

export default createStore(reducer);