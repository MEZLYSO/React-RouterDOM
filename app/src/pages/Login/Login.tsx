import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { createUser } from "../../redux/states/user"

function Login() {

  const dispatch = useDispatch()
  const login = async () => {
    try {
      const result = await getMorty()
      dispatch(createUser(result))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h2 className="text-white">Este es el Login</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
