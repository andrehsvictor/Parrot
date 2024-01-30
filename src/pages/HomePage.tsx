import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Post } from "../types/Post";
import { API_URL } from "../utils/Utils";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}/api/v1.0/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  });
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Container>
    </>
  );
}
