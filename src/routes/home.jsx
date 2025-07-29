import { Link } from "react-router-dom";

export default function Home({posts}) {

    return (
        <div className="home">
            <div className="hero">
                <h1 className="title">Welcome to My Blog</h1>
                <p className="subtitle">Discover amazing articles and share your thoughts!</p>
            </div>
            
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <Link to={`/posts/${post.id}`} className="title">{post.title}</Link>
                        <p className="content">{post.content}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
  