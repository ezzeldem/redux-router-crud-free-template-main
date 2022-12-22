import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
const PostList = ({ data, loading, error, deleteRecored }) => {
  const records = data.map((el, index) => (
    <tr key={index}>
      <td>#{index}</td>
      <td>{el.API}</td>
      <td>{el.Description}</td>
      <td>{el.Auth}</td>
      <td>
        <a href={el.Link}>Link</a>
      </td>
      <td>{el.Category}</td>
      <td>
        <ButtonGroup aria-label='Basic example'>
          <Button variant='success'>Edit</Button>
          <Button onClick={() => deleteRecored(el.API)} variant='danger'>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return <>{loading ? <p>Loading.... </p> : error ? <p>Error </p> : records}</>;
};

export default PostList;
