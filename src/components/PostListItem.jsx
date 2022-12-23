import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
const PostList = ({ data, loading, error, deleteRecored }) => {
  const [allPosts, setAllPosts] = useState(data);

  const deletePost = (indexVal) => {
    // debugger;
    const newData = [...data];
    if (indexVal !== -1) {
      newData.splice(indexVal, 1);
      setAllPosts(newData);
    }
  };

  useEffect(() => {
    setAllPosts(data);
    return () => {
      setAllPosts(undefined);
    };
  }, [data]);

  const records = allPosts.map((el, index) => {
    return (
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
          <ButtonGroup aria-label="Basic example">
            <Button variant="success">Edit</Button>
            <Button
              onClick={(e) => {
                deletePost(index);
              }}
              variant="danger"
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return <>{loading ? <p>Loading.... </p> : error ? <p>Error </p> : records}</>;
};

export default PostList;
