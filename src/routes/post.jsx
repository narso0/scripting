import { useParams, Link } from "react-router-dom";

export default function Post({posts}) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);
  
  if (!post) {
    return (
      <div className="post-container">
        <div className="post not-found">
          <h1 className="title">Post not found</h1>
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="post-container">
      <div className="post">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1 className="title">
          {post.title}
        </h1>
        <p className="content">
          {post.content}
        </p>
      </div>
    </div>
  );
}
