import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const FiltersBlock = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);

  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [colorValue, setColorValue] = useState(search.get("color") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte" || ""));

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setColorValue(search.get("color") || "");
    setPriceValue(search.get("price_lte" || ""));

    getProducts();
  };
  const resetFilter = () => {
    navigate("/");
    setSearchValue("");
    setColorValue("");
    setPriceValue("");
    getProducts();
  };
  return (
    <div className="filters-block">
      <TextField
        value={searchValue}
        onChange={(event) => filterProducts("q", event.target.value)}
        variant="outlined"
        label="Живой поиск ..."
      />
      <div>
        <FormControl fullWidth>
          <InputLabel id="color-select">Цвет</InputLabel>
          <Select
            value={colorValue}
            onChange={(e) => filterProducts("color", e.target.value)}
            labelId="color-select"
            label="Выберите цвет"
          >
            <MenuItem value="black">Черный</MenuItem>
            <MenuItem value="white">Белый</MenuItem>
            <MenuItem value="gray">Серый</MenuItem>
            <MenuItem value="space-gray">Темно-серый</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Slider
          onChange={(e) => filterProducts("price_lte", e.target.value)}
          valueLabelDisplay="auto"
          max={200000}
          step={1000}
        />
      </div>
      <div>
        <Button onClick={resetFilter} variant="contained" color="success">
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default FiltersBlock;
