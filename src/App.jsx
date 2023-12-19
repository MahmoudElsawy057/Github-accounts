import { useState } from "react";
import User from "./components/User";
import SearchForm from "./components/Form";

function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserHandler = async (name) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const repos = await fetch(`https://api.github.com/users/${name}/repos`);
      if (!response.ok) {
        throw new Error("Failed To Fetch User, Please Try Again !");
      }
      const data = await response.json();
      const reposData = await repos.json();
      const forkedRepos = reposData
        .filter((repo) => repo.fork)
        .map((repo) => repo.name);
      data["fork"] = forkedRepos;
      console.log(reposData);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>No User Found.</p>;
  if (user) {
    content = <User user={user} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <SearchForm onSearch={fetchUserHandler} />
      </header>
      <main>{content}</main>
    </>
  );
}

export default App;
