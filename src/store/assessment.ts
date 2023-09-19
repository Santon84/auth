
import { createSlice, createAction } from '@reduxjs/toolkit'
// import { fetchBooks } from './requests/fetch'

export interface Iquestion {
    id: string,
    question: string,
    correct: boolean
}



export interface IAssessmentState {
    questions: Iquestion[],
    id: string,
    name: string,
    loading: boolean,
    error: string

}
const initialState:IAssessmentState = {
    questions: [],
    id: '123123123423',
    name: 'name',
    loading: false,
    error: '',

}

// export const addPage = createAction('addpage')


const AssessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
        getName(state) {
            state.name = state.name.toLowerCase();
        }
    }
    
})
//     extraReducers: (builder) => {
//     builder.addCase(fetchBooks.pending, (state) => {
      
//       state.loading = true;
      
//       }) 

//      builder.addCase(fetchBooks.fulfilled, (state, action) => {
      
//       state.loading = false;
//       if (action.payload === undefined) return state;
      
//       state.items = state.append ? [...state.items, ...action.payload.items] : action.payload.items;
//       state.error = '';
    
//       state.totalItems = action.payload.totalItems || 0;
      
//      })

//      builder.addCase(fetchBooks.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
      
//      })
     
    // },
  




  export default AssessmentSlice.reducer
  