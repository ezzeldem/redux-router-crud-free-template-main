import React, { memo } from "react";
import PostListItem from "./PostListItem";
import { Table } from "react-bootstrap";
const PostList = ({ data, loading, error, deleteRecored }) => {
  return (
    <div style={{ maxHeight: "75vh", overflowY: "scroll" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "20%" }}>Title</th>
            <th style={{ width: "50%" }}>Description</th>
            <th style={{ width: "10%" }}>Auth</th>
            <th style={{ width: "10%" }}>Link</th>
            <th style={{ width: "10%" }}>Category</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <PostListItem
            data={data}
            loading={loading}
            error={error}
            deleteRecored={deleteRecored}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default memo(PostList);
