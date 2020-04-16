import gql from 'graphql-tag'
export const CLASS_LIST = gql`
query classesQuery{
  classes{
    id
    illustration
    label
    description
  }
}
`
