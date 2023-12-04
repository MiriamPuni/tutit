import './style.css'
import Image from '../image'
import Details from '../../details'

export default function Name(props){
    return <div key={'contannier_border'} className = "contannier_border">
    {props.user.map((e)=>
    <div key={e.id} className="border">
    <Image img = {e.image}/>
    <h2 className='name'>{e.firstName}</h2>
    <Details address = {e.address} phon = {e.phoneNumber} age = {e.age}></Details>
        </div>
        )}
    </div>  
}