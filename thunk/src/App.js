import { useState } from "react";
import { useSelector } from "react-redux";
import { Master } from "./GlobalStyle";
import { useDispatch } from "react-redux";
import { addCommentThunk } from './store/modules/user/thunks'

function App() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const [newComment, setNewComment] = useState("");
  return <Master>
    <h1>{user.name}</h1>
    {user.comments.map(comment=><p key={comment}>{comment}</p>)}
    <input type="text" onChange={e=>setNewComment(e.target.value)}/>
    <button onClick={()=>dispatch(addCommentThunk(newComment))}>Enviar</button>
  </Master>
}

export default App;
