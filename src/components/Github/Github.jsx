// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { gitInfoLoader } from "./loadApi";

const Github = () => {
    // This way of fetching api is fast and optimized
    const data = useLoaderData(gitInfoLoader)

// This way of fetching api is quite slower and unoptimized
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/blackholeofuniverse")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <>
      <div className="flex items-center bg-slate-100 max-md:ml-10 max-md:mr-10 max-md:mt-28 max-md:mb-28 lg:mt-10 lg:mb-10 lg:ml-10 lg:mr-10 rounded-lg justify-center p-10 lg:gap-10 gap-4">
        <img
          className="lg:size-64 rounded-full"
          src={data.avatar_url}
          alt="git profile pic"
        />
        <div className="lg:text-4xl">
          <h1>Github Followers: {data.followers}</h1>
          <h1>Repo: {data.public_repos}</h1>
        </div>
      </div>
    </>
  );
};

export default Github;