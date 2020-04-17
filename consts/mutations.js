import gql from 'graphql-tag'
export const LOGIN = gql`
    mutation logInMutation($phone:String!,$password:String!){
        logIn(phone:$phone,password:$password){
          token
        }
    }
`