import { Avatar, Box, Card, Typography } from "@mui/material";
import { Post } from "../types/Post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <Card key={post.id} sx={{ mb: 2, p: 2 }}>
        <Box sx={{ display: "flex" }}>
          <Avatar sx={{ mr: 2, bgcolor: "lightgreen" }} />
          <Typography variant="subtitle1" component="div">
            @{post.author.name}
          </Typography>
        </Box>
        <Typography variant="h6" component="div" sx={{ mt: 1 }}>
          {post.title}
        </Typography>
        <Typography variant="body1" component="div" sx={{ mt: 1 }}>
          {post.content}
        </Typography>
      </Card>
    </>
  );
}
