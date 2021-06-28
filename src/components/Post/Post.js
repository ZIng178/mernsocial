import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";

import { Users } from "../../dummydata";
import likebutton from "../../assests/posts/likebutton.png";
import redheart from "../../assests/posts/redheart.jpg";

const user = Users.filter((u) => u.id === 1);

console.log("user", user);

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="person4"
            />
            <span className="postUsername">
              {" "}
              {Users.filter((u) => u.id === post.userId)[0].username}{" "}
            </span>
            <span className="postDate"> 5 mins ago </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc}</span>
          <img className="postImage" src={post.photo} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="LikeIcon"
              src={likebutton}
              onClick={likeHandler}
              alt="like"
            />
            <img
              className="LikeIcon"
              src={redheart}
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
