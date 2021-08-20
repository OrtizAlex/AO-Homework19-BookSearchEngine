import { gql } from '@apollo/client';

export const GET_ME = gql` {
    query me {
            _id
           username
           email
           createdBooks {
               bookId
               authors
               image
               description
               title
               link
           }
        }
    }
`;