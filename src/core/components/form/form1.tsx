export function Form1() {
  return (
    <div>
      <form action="submit">
        <label htmlFor="name">Name</label>
        <input type="name" />
        <label htmlFor="last_name">Last name</label>
        <input type="last_name" />
        <label htmlFor="birthdate">Birthdate</label>
        <input type="birthdate" />
        <label htmlFor="gender">Gender</label>
        <input type="gender" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <input type="checkbox" name="newsletter">
          Subscribe to our Newsletter
        </input>
        <button>Next</button>
      </form>
    </div>
  );
}
