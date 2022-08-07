import "./movie.css";
function Movie() {
    return (
        <div class="movie-item">
            <a href="#" target="_blank">
                <div class="movie-poster">
                    <img src="logo.png" width="300px" />
                    <div class="movie-info">
                        <div class="movie-score">9.1</div>
                        <div class="movie-title">明日战记</div>
                    </div>
                </div>
            </a>
            <div class="movie-detail">
                <a href="#" class="active" target="_blank">一键购票</a>
            </div>
        </div>
    )
};

export default Movie;