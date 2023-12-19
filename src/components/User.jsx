/* eslint-disable react/prop-types */
import classes from "./User.module.css";

const User = ({ user }) => {
  return (
    <section className={classes.box}>
      <p>Name : {user.login}</p>
      <p>Email : {user.email || " email is missing"}</p>
      <p>Number Of Repos : {user.public_repos}</p>
      <p>Number Of Followers : {user.followers}</p>
      {user.fork.length > 0 ? (
        <ul>
          {" "}
          Forked Repos :
          {user.fork.map((repo) => (
            <li key={repo}>{repo}</li>
          ))}
        </ul>
      ) : (
        "no forked repos found"
      )}
    </section>
  );
};

export default User;
