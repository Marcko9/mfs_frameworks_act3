import { useEffect, useState } from "react";


export function Post({createdAt, autor, text, comments, image, likes }) {

    const [likesCounter, setLikesCounter] = useState(likes);


  return (
    <div className="container mt-2">
        <div className="card h-100">
            <img src={ image } className="card-img-top" alt="Imagen" style={{minHeight:"15em", maxHeight:"15em"}}/>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <h5 className="postDate me-auto">{ createdAt }</h5>
                    <button className='btn btn-danger' onClick={() => setLikesCounter(likesCounter + 1)} ><i className="bi bi-heart-fill"></i>{likesCounter || ".."}</button>
                </div>
                <h5 className="userInfo">{autor}</h5>
                <p className="card-text">{text || "..."}</p>
                
            </div>
            <div className="card-footer">
                <h6 className="card-subtitle comment"><i className="bi bi-chat-right me-2 comment"></i>Comments ({ comments })</h6>
            </div>
        </div>
    </div>
  );
}
