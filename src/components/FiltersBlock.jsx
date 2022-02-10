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
  const [genreValue, setGenreValue] = useState(search.get("genre") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte" || ""));

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setGenreValue(search.get("color") || "");
    setPriceValue(search.get("price_lte" || ""));

    getProducts();
  };
  const resetFilter = () => {
    navigate("/");
    setSearchValue("");
    setGenreValue("");
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
        InputLabelProps={{ className: "textfieldLabel" }}
        sx={{ input: { color: "white" } }}
      />
      <div>
        <FormControl fullWidth>
          <InputLabel
            id="genre-select"
            InputLabelProps={{ className: "textfieldLabel" }}
            style={{ color: "white" }}
            sx={{ input: { color: "white" } }}
          >
            Жанр
          </InputLabel>
          <Select
            style={{ color: "white" }}
            value={genreValue}
            onChange={(e) => filterProducts("genre", e.target.value)}
            labelId="genre-select"
            label="Выберите жанр"
            InputLabelProps={{ className: "textfieldLabel" }}
          >
            <MenuItem value="romance-novel">Любовный роман</MenuItem>
            <MenuItem value="western">Вестерн</MenuItem>
            <MenuItem value="horror">Ужасы</MenuItem>
            <MenuItem value="classic">Классическая литература</MenuItem>
            <MenuItem value="crime">Криминальная проза</MenuItem>
            <MenuItem value="dictionary">Словарь</MenuItem>
            <MenuItem value="autobiography">Автобиография</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Slider
          value={priceValue}
          onChange={(e) => filterProducts("price_lte", e.target.value)}
          valueLabelDisplay="auto"
          max={5000}
          step={100}
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
