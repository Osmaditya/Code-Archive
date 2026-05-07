import {useState} from 'react'

const LikeButton = () => {

  const [isLiked , setIsLiked] = useState(false);   //false -> unlike
  function toggleLike()  {
    setIsLiked(!isLiked);
  }
  let likeStyle = {color : "red"};
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> :<i className="fa-regular fa-heart"></i>} 
      </p>
      
    </div>
  )
}

export default LikeButton
