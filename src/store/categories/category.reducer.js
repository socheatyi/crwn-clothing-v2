
import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  }
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
// export const fetchCategoriesStart = () =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
//     categoriesArray
//   );

// export const fetchCategoriesFailure = (error) =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments('categories');
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, isLoading: false, categories: payload };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, isLoading: false, error: payload };
//     default:
//       return state;
//   }
// };