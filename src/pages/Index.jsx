import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../state/postSlice";
import { useCallback } from "react";

const Index = () => {
  const dispatch = useDispatch();

  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecored = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <PostList
      data={records}
      loading={loading}
      error={error}
      deleteRecored={deleteRecored}
    />
  );
};

export default Index;
