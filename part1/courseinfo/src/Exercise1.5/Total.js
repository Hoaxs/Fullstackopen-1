const Total = (props) => {
    let sum = 0
    return (
        <div>
            <strong>Total number of exercises ={props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </strong>
        </div>
    )
}
export default Total