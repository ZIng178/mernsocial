import React, { useState, useEffect, useContext } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
const Post = ({ post }) => {
  console.log("post", post);
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/userId={post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console(err);
    }
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "persons/avatar.png"
                }
                alt="person4"
              />
            </Link>

            <span className="postUsername"> {user.username} </span>
            <span className="postDate"> {format(post.createdAt)} </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc}</span>
          <img className="postImage" src={PF + post.img} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="LikeIcon"
              src="/assests/posts/likebutton.png"
              onClick={likeHandler}
              alt="like"
            />
            <img
              className="LikeIcon"
              src="/assests/posts/redheart.jpg"
              onClick={likeHandler}
              alt="like"
            />
            <span className="postLikeCounter"> {like} people liked it </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment} comments </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
