interface OvalProps {
    name: string;
    age: number;
    isStudent: boolean;
}

    const Oval: React.FC<OvalProps> = (props) => { 
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}
export default Oval;