import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_STUDENTS = gql`
  query Getallstudents {
    students {
      id,
      name,
      email,
      age
      
      
    }
  }
`;

const ADD_STUDENTS = gql`
  mutation AddStudent ($id: Int!, $name: String!, $email: String!, $age: Int!) {
    addStudent (
     input: { id: $id,
      name: $name,
      email: $email,
      age: $age
     }) 
    
    {
      id,
      name,
      email,
      age
      
      
    }
  }
`;


export function Students() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [addStd] = useMutation(ADD_STUDENTS);

  if (loading)
    return <h1>Loading...</h1>
  if (error)
    return <h1>Error</h1>
  const { students } = data;
  return (

    <div>
      <h1>Student List</h1>
      <table border="2" width="500">
        <thead>
          <tr>

            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(std => {
              return (<tr key={std.id}>

                <td>{std.name}</td>
                <td>{std.age}</td>
                <td>{std.email}</td>
              </tr>)

            })
          }
        </tbody>
      </table>
      <button onClick={() =>
        addStd({
          variables: { id: 4, name: "Iqra", email: "iqra@gmail.com", age: 12 }
        })

      }>ADD_STUDENT</button>
    </div>

  );
}