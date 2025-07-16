<!--
ReduxState/
├── store/
│   ├── store.ts
│   ├── reducers.ts
│   ├── sagas.ts
│   ├── types.ts
│   └── selectors.ts
├── hooks.tsx
└── index.tsx
-->

## Required packages:

"@reduxjs/toolkit",
"react-redux",
"redux-saga"

## Requires

<Provider store={store}>{children}</Provider>

## Redux Slice Implementation Instructions

Create a Redux slice with the following features:

1. **Async Fetching with Sagas**
   - Implement sagas for fetching data (e.g., `getRecipesSaga`)
   - Include actions: `fetchAction`, `fetchActionSuccess`, `fetchActionFailure`
   - Use sagas to transform the fetched data (e.g., normalize or filter fields)

2. **Selectors**
   - Create a separate file for selectors
   - Each selector should return an object: `{ data, isLoading, error }`

3. **Naming Convention**
   - Slice name: `recipeSlice`
   - Selector: `selectFetchRecipeState`

4. **Constraints**
   - Do **not** use `createAsyncThunk`
   - Use Redux-Saga for all async logic