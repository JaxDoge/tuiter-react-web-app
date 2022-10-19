import Nav from "../../nav";
import Classes from "./classes";
import Style from "./style";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <Nav />
            <h1>Assignment 6</h1>
            <TodoItem />
            <TodoList />
            <ConditionalOutput />
            <Style />
            <Classes />
        </div>
    );
}
export default Assignment6;