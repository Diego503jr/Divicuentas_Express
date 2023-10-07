import React from "react";
import Check from "./Check";

export default function Option({
  img1,
  title1,
  txt1,
  onClick1,
  food,
  text,
  id1,
  id2,
  dataBsToggle,
  dataBsTarget,
  ...props
}) {
  return (
    <div
      style={{ cursor: "pointer" }}
      className={`${
        food
          ? "d-flex flex-wrap w-50 mt-3 mb-4"
          : "d-flex flex-wrap w-50 mt-3 mb-4"
      }`}
    >
      <div className="container">
        <div className="row">
          <div
            style={{ color: "#040100" }}
            className="col-sm-12 d-flex flex-column align-items-center mt-3"
          >
            <img src={img1} alt={img1} className="img-fluid w-25" />
            <h3 className="fs-5 fw-bold">{title1}</h3>
            <p className="fw-normal">{txt1}</p>
            {food ? (
              <div className="d-flex">
                <Check person={1} text={text} id={id1} {...props} />
                <Check person={2} text={text} id={id2} {...props} />
              </div>
            ) : (
              <button
                style={{ backgroundColor: "#E22717" }}
                className="btn rounded-5 text-white fs-6"
                onClick={onClick1}
                data-bs-toggle={dataBsToggle}
                data-bs-target={dataBsTarget}
              >
                Seleccionar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
