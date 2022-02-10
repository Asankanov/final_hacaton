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
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";

const EditPage = () => {
  const params = useParams();
  const { getProductToEdit, productToEdit, saveEditProduct } =
    useContext(AdminContext);
  const [productEdit, setProductEdit] = React.useState(productToEdit);
  const navigate = useNavigate();

  useEffect(() => {
    setProductEdit(productToEdit);
  }, [productToEdit]);
  console.log(productEdit);
  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //! Проверка на пустоту
    for (const key in productEdit) {
      if (!productEdit[key]) {
        alert("Заполните поля");
      }
    }
    saveEditProduct(productEdit);

    navigate("/admin-panel");
  };

  if (!productEdit) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="add-edit-page">
      <Container>
        <h2 style={{ color: "white" }}>Edit Page</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            value={productEdit.author}
            onChange={(e) =>
              setProductEdit({ ...productEdit, author: e.target.value })
            }
            label="Ваедите автор"
            variant="standard"
          />
          <TextField
            value={productEdit.name}
            onChange={(e) =>
              setProductEdit({ ...productEdit, name: e.target.value })
            }
            label="Ваедите называние"
            variant="standard"
          />
          <TextField
            value={productEdit.price}
            onChange={(e) =>
              setProductEdit({ ...productEdit, price: e.target.value })
            }
            label="Ваедите цену"
            variant="standard"
            type="number"
          />
          <TextareaAutosize
            value={productEdit.description}
            onChange={(e) =>
              setProductEdit({ ...productEdit, description: e.target.value })
            }
            placeholder="Введите описание"
            minRows={3}
          />
          <TextField
            value={productEdit.image}
            onChange={(e) =>
              setProductEdit({ ...productEdit, image: e.target.value })
            }
            label="Ваедите фото"
            variant="standard"
          />
          <FormControl fullWidth>
            <InputLabel id="genre-select">Жанр</InputLabel>
            <Select
              value={productEdit.genre}
              onChange={(e) =>
                setProductEdit({ ...productEdit, genre: e.target.value })
              }
              labelId="genre-select"
              label="Выберите Жанр"
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
          <Button color="success" variant="contained" type="submit">
            Сохранить изменения
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditPage;
