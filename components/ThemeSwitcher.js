import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { themeAction } from "../redux/slices/themeSlice";

const ThemeSwitcher = () => {
  const { isLightTheme } = useSelector((state) => state.isLightTheme);
  const dispatch = useDispatch();

  const handleIconSwitch = () => {
    dispatch(themeAction.changeTheme());
  }

  return <FontAwesomeIcon onClick={handleIconSwitch} icon={isLightTheme ? faSun : faMoon} />;
};

export default ThemeSwitcher;
