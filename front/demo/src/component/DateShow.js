function MyDate(props){
    console.log(props);
    return (
        <div>
            today is {props.day}/{props.month}/{props.year}
        </div>
    );
}

export default MyDate;