import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost({onAddPost}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onAddPost({
                id: Date.now().toString(),
                title: title.trim(),
                content: content.trim()
            });
            navigate("/");
        } else {
            alert("Please fill in all fields");
        }
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="new-post-container">
            <div className="new-post">
                <h1 className="title">Create New Post</h1>
                
                <form onSubmit={handleSubmit} className="form">
                    <div className="group">
                        <label htmlFor="title" className="label">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title..."
                            className="input"
                            required
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="content" className="label">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter post content..."
                            className="textarea"
                            rows="6"
                            required
                        />
                    </div>

                    <div className="buttons">
                        <button type="submit" className="create">
                            Create Post
                        </button>
                        <button type="button" onClick={handleCancel} className="cancel">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

