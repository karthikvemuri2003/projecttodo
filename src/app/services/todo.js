// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/todos' }),
  endpoints:(builder)=>({
    addtodo:builder.mutation({
        query(todo){
            return {
                url:`/`,
                method:'POST',
                body:todo
            }
        }
    })
  })
})
export const {useAddtodoMutation} = todosApi