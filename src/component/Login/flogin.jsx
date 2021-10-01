import { Link } from 'react-router-dom';
import './flogin.css';

function Flogin() {
  return (
    <div id="wrapper">
      <form>
        <div id="logo">
          <div id="logoImage">
            <img src="/assets/BRI.jpg" alt="LOGO"></img>
          </div>
          <div id="Logoword">
            {" "}
            <h4>BRILink Antarjemput</h4>{" "}
          </div>
        </div>

        <div id="input">
          <div id="username">
            <label>Username : </label>
            <input type="text"></input>
          </div>
          <div id="password">
            <label>Password : </label>
            <input type="password"></input>
          </div>
        </div>

        <div id="loginAs">
          <label> Login as : </label>
          <select>
            <option value="customers">Customers</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        <Link to="/customer-beranda">
          <button type="submit">Sign In</button>
        </Link>
      </form>
    </div>
  );
}
export default Flogin;
