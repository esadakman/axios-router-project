import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchUser from "../components/SearchUser";
import Followers from "../components/Followers";

const Home = () => {
  const [allFollowers, setAllFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getFollowers = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/esadakman/followers?per_page=100"
      );
      setAllFollowers(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    getFollowers();
  }, []);

  const followersList = allFollowers.filter((follower) =>
    follower.login.includes(search)
  );

  return (
    <div>
      <SearchUser handleChange={handleChange} />
      <Followers followers={{ loading, followersList }} />
    </div>
  );
};

export default Home;
