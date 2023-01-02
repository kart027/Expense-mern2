import { configureStore } from '@reduxjs/toolkit'
import authresducer from "./auth.js"

export default configureStore({
  reducer: {
    auth:authresducer,
  },
})