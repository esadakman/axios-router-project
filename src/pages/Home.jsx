import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Paginate from "../components/Paginate";
import SearchUser from "../components/SearchUser";

const Home = () => {
  const [allFollowes, setAllFollowes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getFollowers = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/esadakman/followers?per_page=100"
    );
    console.log(data);
  };
  useEffect(() => {
    getFollowers();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <SearchUser />
      <Paginate />
    </div>
  );
};

export default Home;
