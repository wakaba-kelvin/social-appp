import React from "react";
import "../Components/RightMoreInfo.scss";
import avarta from "../assets/64px.png";
import youtube from "../assets/Vector.png";
import photos from "../assets/photo.png";
import stars from "../assets/star.png";
import image1 from "../assets/unsplash_c1rOy44wuts.png";
import image2 from "../assets/unsplash_XeYx043QD5U.png";
import likes from "../assets/notification.png";
import comments from "../assets/message-circle.png";
import share from "../assets/Group.png";
import smiley from "../assets/message-circle.png";

const RightMoreInfo = () => {
  return (
    <div className="RightMoreInfo">
      <div className="upper-right">
        <div className="upper-right1">
          <div className="upper-right-details">
            <img src={avarta} alt="" />
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="upper-right-details2">
            <div className="p-img">
              <img src={youtube} alt="" />
              <p>Live Video</p>
            </div>
            <div className="p-img">
              <img src={photos} alt="" />
              <p>Image / Video</p>
            </div>
            <div className="p-img">
              <img src={stars} alt="" />
              <p>Activity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-right">
        <div className="lower-img-details">
          <img src={avarta} alt="" />
          <div className="img-img">
            <p>Angela Lee</p>
            <p>58 Minutes Ago</p>
          </div>
        </div>

        <div className="lower-right-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, happy for that!
          </p>
        </div>

        <div className="lower-right-images">
          <div className="image123">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
          <div className="image-icons-container">
            <div className="image-icons">
              <img src={likes} alt="" />
              <p>2.6 Likes</p>
            </div>
            <div className="image-icons">
              <img src={comments} alt="" />
              <p>297 comments</p>
            </div>
            <div className="image-icons">
              <img src={share} alt="" />
              <p>201 shares</p>
            </div>
          </div>
        </div>

        <div className="write-your-message">
          <input type="text" placeholder="Write your message" />
          <img src={smiley} alt="" />
          <img src={share} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightMoreInfo;
