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

    const terms = ["All", "Upcoming", "August", "September", "October", "November", "December", "January", "February", "March", "April"];

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const filtered = tournaments.filter((tournament) => {
            if (term === "Upcoming") {
                return (
                    tournament.name.toLowerCase().includes(search.toLowerCase()) &&
                    tournament.going &&
                    !tournament.complete
                );
            } else if (term === "All" || tournament.month.includes(term)) {
                return (
                    tournament.name.toLowerCase().includes(search.toLowerCase()) &&
                    tournament.going
                );
            } else return false;

        });
        setFilteredTournaments(filtered);
    }, [term, search]);

    return (
        <>
            <div className='schedule-page'>
                <h1>2024-2025 Academic Year Tournament Schedule</h1>
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
                    {filteredTournaments.length === 0 ? (
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                                No tournaments found
                            </Typography>
                    </Grid>
                        )   :   ( 
                        filteredTournaments.map((tournament) => (
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
                                <Typography variant="body1" className='info'>Status: {tournament.complete ? "Complete" : "Upcoming"}</Typography>
                            </Paper>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    );
}