import React from 'react';

const AstroDetailCard = ({ data }) => {
  return (
    <div className="basic-weather astro">
      <div className="card-heading">
        <div>Sunrise / Sunset</div>
      </div>
      <div className="card-content">
        <div className="city-details">
          <div className="card-left">
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/sunrise.svg" />
                Sunrise
              </div>
              <div className="card-value">{data.astro.sunrise}</div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/moonrise.svg" />
                Moonrise
              </div>
              <div className="card-value">{data.astro.moonrise}</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/sunset.svg" />
                Sunset
              </div>
              <div className="card-value">{data.astro.sunset}</div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/moonset.svg" />
                Moonset
              </div>
              <div className="card-value">{data.astro.moonset}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroDetailCard;
