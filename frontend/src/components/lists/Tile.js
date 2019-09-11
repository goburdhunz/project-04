import React from 'react'
import ReactMarkdown from 'react-markdown'


const Tile = ({title, authorFirstname, authorLastname, authorImage, image, content})=> {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-10 contentdetail">
        <article className="tile is-child box">
          <div className="titleinfo">
            <figure className="image">
              <img className="image is-48x48 is-rounded" src={authorImage}/>
            </figure>
            <p className="title detailtitle">{title}</p>
          </div>
          <p className="subtitle detailsub">By {authorFirstname} {authorLastname}</p>
          <hr />
          <figure className="image is-256x256">
            <img src={image}/>
          </figure>
          <hr />
          <p className="content"></p>
          <ReactMarkdown source={content} className="content"/>
        </article>
      </div>
    </div>
  )
}

export default Tile
