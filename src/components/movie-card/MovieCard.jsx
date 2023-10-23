import "./movieCard.scss";
const MovieCard = (props) => {
  const { data } = props;
  const year = data.Year.slice(0, 4);
  console.log(year);
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
