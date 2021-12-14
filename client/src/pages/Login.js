const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://song-exploder-v3.herokuapp.com/login";

const Login = () => (
  <>
    <button href={LOGIN_URI}>Log in to Spotify</button>
  </>
);

export default Login;
