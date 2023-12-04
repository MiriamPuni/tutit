import user from "./user.json"
import Titele from "./components/titele"
import Name from "./components/name"
export default function App(){
  return(
    <div key={"contanier"} className="contanier" >
      <Titele/>
      <Name user = {user} />
      </div>
  )
}