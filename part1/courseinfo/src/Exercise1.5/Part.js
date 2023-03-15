const Part = (props) => {

    return (<div>
        <p>{props.part[0].name}  {props.part[0].exercises}</p>
        {props.part[1].name}  {props.part[1].exercises}
        <p>{props.part[2].name} {props.part[2].exercises}</p>
    </div>)

}
export default Part