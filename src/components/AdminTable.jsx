import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../contexts/AdminProvider";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function AdminTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  if (!products) {
    return <h2>Loading ...</h2>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button
                  onClick={() => deleteProduct(item.id)}
                  color="error"
                  variant="contained"
                >
                  Del
                </Button>
              </TableCell>
              <TableCell>
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button color="warning" variant="contained">
                    Edit
                  </Button>
                </Link>
              </TableCell>
              <TableCell component="th" scope="item">
                {item.name}
              </TableCell>
              <TableCell align="right">
                {<img width={80} src={item.image} alt="img-product" />}
              </TableCell>
              <TableCell align="right">{item.author}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.genre}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
