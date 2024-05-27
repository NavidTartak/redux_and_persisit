"use client";
import {
  setUser,
  setUserByFetch,
} from "@/redux/features/fakeData/fackDataSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DashboardComponent = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setUserFunc = (user) => {
    dispatch(setUser(user));
  };
  //first fetch from outside then set user
  //.
  //.
  //.
  //   useEffect(() => {
  //     if (!user) {
  //       fetch("https://jsonplaceholder.typicode.com/todos/1")
  //         .then((response) => response.json())
  //         .then((json) => setUserFunc(json));
  //     }
  //   }, [user]);
  //end

  //fetch inside reducer
  //.
  //.
  //.
  useEffect(() => {
    if (!user) {
      dispatch(setUserByFetch());
    }
  }, [user]);
  return <div>{user ? user.title : "No Data"}</div>;
};
//end

export default DashboardComponent;
