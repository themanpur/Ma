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
export const COURSE_LIST = gql`
query coursesByClassQuery($classId:ID!){
  coursesByClass(classId:$classId){
    id
    illustration
    chapterNumber
    title
    level
    {
      label
    }
    description
    pdfLink
    videoLink
  }
}
`