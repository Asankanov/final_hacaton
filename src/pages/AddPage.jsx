import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "../contexts/AdminProvider";

const AddPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    author: "",
    price: "",
    description: "",
    image: "",
    genre: "",
  });

  const { addProduct } = React.useContext(AdminContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    //! Проверка на пустоту
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля!!!");
        return;
      }
    }
    addProduct(newProduct);
    //! Очишаем инпуты
    setNewProduct({
      name: "",
      author: "",
      price: "",
      description: "",
      image: "",
      genre: "",
    });
  };

  return (
    <div className="add-edit-page">
      <Container>
        <h2 style={{ color: "white" }}>Add Page</h2>
        <form className="add-edit-vniz" onSubmit={handleSubmit}>
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
            InputLabelProps={{ className: "textfieldLabel" }}
          />
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, author: e.target.value })
            }
            value={newProduct.author}
            label="Введите Автор"
            variant="standard"
            InputLabelProps={{ className: "textfieldLabel" }}
          />
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: +e.target.value })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
            className="textfield"
            InputLabelProps={{ className: "textfieldLabel" }}
          />
          <TextareaAutosize
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            minRows={4}
            placeholder="Введите описание"
          />
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите фото"
            variant="standard"
            InputLabelProps={{ className: "textfieldLabel" }}
          />
          <FormControl fullWidth>
            <InputLabel
              id="genre-select"
              InputLabelProps={{ className: "textfieldLabel" }}
              style={{ color: "white" }}
            >
              Жанр
            </InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, genre: e.target.value })
              }
              value={newProduct.genre}
              labelId="genre-select"
              label="Выберите жанр"
              InputLabelProps={{ className: "textfieldLabel" }}
              style={{ color: "white" }}
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
          <Button type="submit" variant="contained">
            Добовить
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddPage;
