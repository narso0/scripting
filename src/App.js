import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Post from "./routes/post";
import NewPost from "./routes/new-post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Getting Started with React",
      content:
        "React is a very good framework for building user interfaces. It's easy to learn and has a large community support. React is a very good framework for building user interfaces.",
    },
    {
      id: "2",
      title: "Getting Started with React",
      content:
        "React is a very good framework for building user interfaces. It's easy to learn and has a large community support.",
    },
    {
      id: "3",
      title: "Getting Started with React",
      content:
        "React is a very good framework for building user interfaces. It's easy to learn and has a large community support.",
    },
  ]);

  const handleAddPost = (post) => {
    setPosts([...posts, post]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home posts={posts} /> },
        { path: "posts/:postId", element: <Post posts={posts} /> },
        { path: "new-post", element: <NewPost onAddPost={handleAddPost} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
