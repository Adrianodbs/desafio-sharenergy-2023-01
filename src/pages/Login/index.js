import './login.css'

export default function LoginPage() {
  return (
    <div className="login">
      <h1>Faça o seu login</h1>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Login</button>
      </form>
    </div>
  )
}
