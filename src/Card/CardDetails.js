import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Fab,
  TableHead,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 25,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MultiActionAreaCard() {
  const id = useSelector((state) => state.user.id);
  const [details, setDetails] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  // const [loader, setLoader] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://free-nba.p.rapidapi.com/players/+${id}`, {
        params: { page: "1", per_page: "5" },
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5ff8afd798msh26fb333754e9d9fp12a1a4jsna7c6a035317b",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // loading ? setLoader("Loading...") : setLoader("");
  return (
    <Card sx={{ maxWidth: 1960 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image="https://source.unsplash.com/random"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="mt-3"
          >
            <h1>Details</h1>
          </Typography>

          <span style={{ fontSize: "25px", color: "#00b0ff" }}>
            user id - {details.id}
            &nbsp;&nbsp;
            {loading ? <span>Loading...</span> : null}
          </span>
          <br />
          <br />
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>full_name</StyledTableCell>
                  <StyledTableCell>Last Name</StyledTableCell>
                  <StyledTableCell>abbreviation</StyledTableCell>
                  <StyledTableCell>city</StyledTableCell>
                  <StyledTableCell>conference</StyledTableCell>
                  <StyledTableCell>division</StyledTableCell>
                  <StyledTableCell>id</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>{details.first_name}</StyledTableCell>
                  <StyledTableCell>{details?.team?.full_name}</StyledTableCell>
                  <StyledTableCell> {details.last_name}</StyledTableCell>
                  <StyledTableCell>
                    {details?.team?.abbreviation}
                  </StyledTableCell>
                  <StyledTableCell>{details?.team?.city}</StyledTableCell>
                  <StyledTableCell>{details?.team?.conference}</StyledTableCell>
                  <StyledTableCell>{details?.team?.division}</StyledTableCell>
                  <StyledTableCell>{details?.team?.id}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
