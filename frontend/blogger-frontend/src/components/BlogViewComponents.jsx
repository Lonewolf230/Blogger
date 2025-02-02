// CommentThread.js
import { useState } from 'react';
import './CommentThread.css';
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { use } from 'react';


const Comment = ({ comment, addReply, level = 0 }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      addReply(comment.id, {
        id: Date.now(),
        author: 'Current User',
        text: replyText,
        replies: [],
        timestamp: new Date().toISOString()
      });
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-wrapper">
        {level > 0 && <div className="thread-line"></div>}
        <div className="comment-content">
          <div className="comment-header">
            <div className="avatar">
              {comment.author[0]}
            </div>
            <div className="author-info">
              <div className="author-name">{comment.author}</div>
              <div className="timestamp">
                {new Date(comment.timestamp).toLocaleDateString()}
              </div>
            </div>
          </div>
          
          <p className="comment-text">{comment.text}</p>
          
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="reply-button"
          >
            Reply
          </button>

          {isReplying && (
            <form onSubmit={handleSubmitReply} className="reply-form">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                rows="2"
              />
              <div className="button-group">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsReplying(false)}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {comment.replies?.length > 0 && (
        <div className="replies-container">
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              addReply={addReply}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Rest of the CommentThread component remains the same...
const CommentThread = () => {
    const [comments, setComments] = useState([
      {
        id: 1,
        author: 'John Doe',
        text: 'This is a great article!',
        timestamp: '2024-02-03T10:00:00Z',
        replies: [
          {
            id: 2,
            author: 'Jane Smith',
            text: 'I agree with your points.',
            timestamp: '2024-02-03T10:30:00Z',
            replies: [
              {
                id: 3,
                author: 'John Doe',
                text: 'Thanks for the feedback!',
                timestamp: '2024-02-03T11:00:00Z',
                replies: []
              }
            ]
          }
        ]
      }
    ]);
  
    const [newComment, setNewComment] = useState('');
    const [like,setLike]=useState(false);
    const [dislike,setDislike]=useState(false);
    const addReply = (parentId, newReply) => {
      const addReplyToComment = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply]
            };
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: addReplyToComment(comment.replies)
            };
          }
          return comment;
        });
      };
  
      setComments(addReplyToComment(comments));
    };
  
    const handleAddComment = (e) => {
      e.preventDefault();
      if (newComment.trim()) {
        const comment = {
          id: Date.now(),
          author: 'Current User',
          text: newComment,
          timestamp: new Date().toISOString(),
          replies: []
        };
        setComments([...comments, comment]);
        setNewComment('');
      }
    };

    const handleLike=()=>{
        if(setDislike){
            setDislike(false)
        }
        setLike(!like)
    }

    const handleDislike=()=>{
        if(setLike){
            setLike(false)
        }
        setDislike(!dislike)
    }
  
    return (
      <div className="comment-section">
        <div className='blog-stats'>
            <div className='like-dislike' onClick={handleLike}>
                <AiFillLike size={30} color={like?'blue':''}/>
                <p>10</p>
            </div>
            <div className='like-dislike' onClick={handleDislike}>
                <AiFillDislike size={30} color={dislike?'blue':''}/>
                <p>10</p>
            </div>        
        </div>
        <h2 className="section-title">Comments</h2>
        
        <form onSubmit={handleAddComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
            placeholder="Write a comment..."
            rows="3"
          />
          <button type="submit" className="submit-comment-btn">
            Add Comment
          </button>
        </form>
  
        <div className="comments-container">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              addReply={addReply}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default CommentThread;