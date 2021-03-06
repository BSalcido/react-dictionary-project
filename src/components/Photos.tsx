import React from "react";
import "./Photos.css";
import "./Sections.css";
import { Photo } from "../types";

type Props = { photos: Photo[] | null };

const Photos = (props: Props) => {
  if (props.photos && props.photos.length > 0) {
    return (
      <div className="Photos">
        <section className="Photos__section">
          <div className="row Photos__image-table">
            {props.photos.map((photos, index) => {
              return (
                <div
                  className="col-6 col-md-4 col-lg-3 Photos__image"
                  key={index}
                >
                  <a
                    href={photos.src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="img-fluid mx-auto d-block"
                      src={photos.src.tiny}
                      alt={photos.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Photos;
