import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="last-four">4</span>
        </h1>
      </div>
      <p className="not-found__text">Sorry, page could not be found.</p>
      <p className="not-found__text">
        Try entering a dragonballz character or reload the page.
      </p>
    </div>
  );
};

export default NotFound;
