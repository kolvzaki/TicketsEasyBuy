import { Link } from "react-router-dom";
import { Button } from 'antd';
import "./movie.css";

function Movie() {
    return (
        <div class="movie-item">
            <Link to="/movie-info">
                <div class="movie-info">
                    <img src="logo.png" width="300px" />
                    <div class="movie-score">9.1</div>
                    <div class="movie-title">明日战记</div>
                </div>
            </Link>
            <div class="movie-ticket-order">
                <Link to="/movie-ticket-order"><Button type="primary">一键购票</Button></Link>
            </div>
        </div>
    )
};

export default Movie;