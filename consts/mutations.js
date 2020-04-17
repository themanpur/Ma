import gql from 'graphql-tag'
export const LOGIN = gql`
    mutation logInMutation($phone:String!,$password:String!){
        logIn(phone:$phone,password:$password){
          token
        }
    }
`
export const SIGNUP = gql`
mutation signUpMutation($name: String!,$email: String,$phone: String!,$level: ID!,$password: String!){
  signUp(name:$name,email:$email,phone:$phone,level:$level,password:$password){
    token
  }
}
`