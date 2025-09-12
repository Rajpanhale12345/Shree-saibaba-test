import React from "react";

const DoctorCard = ({ name, color = "#0a9396", Icon, doctors = [] }) => {
  return (
    <article className="doc-card" style={{ "--accent": color }}>
      <header className="doc-card__head">
        <div className="doc-card__icon">
          {Icon ? <Icon aria-hidden="true" /> : null}
        </div>
        <div className="doc-card__titles">
          <h3 className="doc-card__title">{name}</h3>
          <p className="doc-card__meta">
            <span className="dot" /> {doctors.length} Doctor
            {doctors.length !== 1 ? "s" : ""}
          </p>
        </div>
      </header>

      <ul className="doc-card__list">
        {doctors.map((d, i) => (
          <li key={i} className="doc-card__row">
            <div className="doc-card__name">{d.name}</div>
            <div className="doc-card__degree" title={d.degree}>
              {d.degree}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DoctorCard;
