const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://song-exploder-v3.herokuapp.com/login";

const Login = () => (
  <>
    <a href={LOGIN_URI}>Log in to Spotify</a>
  </>
);

export default Login;
