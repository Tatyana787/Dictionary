import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.allPhotos) {
    return (
      <section className="Photos">
        <div className="row">
        {props.allPhotos.map(function (photo, index) {
      return (
        <div className="col-4" key={index}>
          <a
            href={photo.src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={photo.src.landscape}
              className="img-fluid"
              alt={photo.photographer}
            />
          </a>
        </div>
      );
    })}
    </div>
      </section>
    );
  }
}
