import { createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "haha",
  },
  reducers: {
    changeCounter(state, { payload }) {
      state.count += payload
    },
  },
})
export const { changeCounter } = counterSlice.actions
export default counterSlice.reducer
