import './style.css'
export default function Image(props){
    return <div className='img' style={{backgroundImage: `url(${props.img})`}}></div>
}

