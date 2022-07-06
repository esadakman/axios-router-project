import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Followers from "../components/Followers";
import SearchUser from "../components/SearchUser";

const Home = () => {
  const [allFollowers, setAllFollowes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getFollowers = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/esadakman/followers?per_page=100"
    );
    console.log(data);
    setAllFollowes(data);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getFollowers();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const followersList = allFollowers.filter((follower) =>
    follower.login.includes(search)
  );

  return (
    <div>
      <SearchUser handleChange={handleChange} />
      <Followers followers={{ followersList, loading }} />
    </div>
  );
};

export default Home;
