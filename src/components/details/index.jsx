import './style.css'
export default function Details(props){
    return <div className='details'>
        <p> Address: {props.address}</p>
        <p> Phone: {props.phon}</p>
        {(props.age) ? <p>Age: {props.age}</p> : <p></p> }
    </div>
}