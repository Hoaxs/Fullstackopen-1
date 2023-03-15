const Content = (props) => {
    return (
        <div>
            {props.part1}: {props.exercise1}
            <p>{props.part2}:{props.exercise2}</p>
            {props.part3}:{props.exercise3}
        </div>
    )
}
export default Content