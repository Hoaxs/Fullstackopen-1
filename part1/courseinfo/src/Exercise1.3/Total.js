const Total = (props) => {
    return (
        <div>
            <p><strong>Total number of exercises: {props.exercise1 + props.exercise2 + props.exercise3}</strong></p>
        </div>
    )
}
export default Total