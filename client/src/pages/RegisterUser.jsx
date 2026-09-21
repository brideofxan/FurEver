import Navbar from "../components/Navbar.jsx";

export default function RegisterUser() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <form>
        <div>
          <label htmlFor="username">
            Användarnamn <sup>*</sup>
          </label>
          <input type="text" name="username" id="username" value="" required />
        </div>

        <div>
          <label htmlFor="password">
            Lösenord <sup>*</sup>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value=""
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">
            Bekräfta lösenord <sup>*</sup>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value=""
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
