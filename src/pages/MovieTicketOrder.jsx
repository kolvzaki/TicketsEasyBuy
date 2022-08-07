import { getTodos } from "../apis/todoApi";

function MovieTicketOrder() {
    const todos = getTodos().then((response) => {
        return response.data;
    });

    return (
        <div>
            {{todos}}
        </div>
    );
}

export default MovieTicketOrder;