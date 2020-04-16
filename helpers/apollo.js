import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {URI} from '../consts/api'
import {createUploadLink} from 'apollo-upload-client'
import {setContext} from 'apollo-link-context'
import {getItem} from '../helpers/localStorage'
const httpLink = createUploadLink({
  uri: URI
})
const authLink = setContext(async (_,{headers})=>{
  const token = await getItem("token")
  return {
    headers:{
      ...headers,
      authorization:token ? `Bearer ${token}`:''
    }
  }
})
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})