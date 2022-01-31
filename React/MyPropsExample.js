const MyPropsExample = (props) => {
    return (
        <div>
            <h1>This is my props example {props.name} {props.age}</h1>
            <h2>{props.children}</h2>
        </div>
    );
}
export default MyPropsExample;