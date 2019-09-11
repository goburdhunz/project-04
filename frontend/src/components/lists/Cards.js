import React from 'react'


const Cards = ({title, authorFirstname, authorLastname,authorImage, image}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img className="image is-48x48 is-rounded" src={authorImage}/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">By {authorFirstname} {authorLastname}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
