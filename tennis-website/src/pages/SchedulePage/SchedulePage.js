import "./SchedulePage.css";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Typography,
    Container,
    Grid,
    Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { tournaments } from "../../teamInfo/tournaments";

export default function SchedulePage() {
    const [term, setTerm] = useState("All");
    const [search, setSearch] = useState("");
    const [filteredTournaments, setFilteredTournaments] = useState(tournaments);
    const [termFilteredTournaments, setTermFilteredTournaments] = useState(tournaments);

    const terms = ["All", "September", "October", "November", "December"];

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const filtered = termFilteredTournaments.filter((tournament) => {
            return (
                (term === "All" || tournament.month === term) &&
                tournament.name.toLowerCase().includes(search.toLowerCase()) &&
                tournament.going
            );
        });
        setFilteredTournaments(filtered);
    }, [term, search, termFilteredTournaments]);

    return (
        <>
            <div className='schedule-page'>
                <h1>Fall 2023 Tournament Schedule</h1>
            </div>
            <div className="search-bar">
                <SearchIcon sx={{ marginRight: "5px", fontSize: 40, color: "var(--uva-dark-blue)" }}></SearchIcon>
                <TextField
                    value={search}
                    placeholder="Find Tournament"
                    onChange={(event) => handleSearch(event)}
                    sx={{ marginRight: "10px", width: "25%", backgroundColor: "var(--uva-dark-blue)",     
                    color: "var(--white)",
                        '& input': {
                        color: 'var(--white)', 
                        },
                    }}
                ></TextField>
                <FormControl sx={{ width: "25%" }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: "var(--uva-orange)" }}>
                        Month
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={term}
                        label="Month"
                        onChange={(e) => setTerm(e.target.value)}
                        sx={{ backgroundColor: "var(--uva-dark-blue)", color: "var(--white)" }}
                    >
                        {terms.map((term) => (
                        <MenuItem key={term} value={term}>
                            {" "}
                            {term}{" "}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <Container maxWidth="fullWidth">
                <Grid container spacing={3} justifyContent="left" marg>
                    {filteredTournaments.map((tournament) => (
                        <Grid key={tournament.name} item xs={12} sm={6} md={4}>
                        <Paper
                            elevation={0}
                            sx={{
                            padding: 3,
                            textAlign: 'left',
                            marginBottom: 4,
                            color: 'var(--white)',
                            backgroundColor: 'var(--uva-dark-blue)',
                            border: '5px solid var(--uva-orange)'
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                            {tournament.name}
                            </Typography>
                            <Typography variant="body1" className='info'>Dates: {tournament.date}</Typography>
                            <Typography variant="body1" className='info'>Location: {tournament.location}</Typography>
                            <Typography variant="body1" className='info'>Tournament Director: {tournament.director}</Typography>
                            <Typography variant="body1" className='info'>{tournament.level}</Typography>
                        </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}