import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

import { teamMembers } from '../../teamInfo/teamMembers';
import "./MeetTheTeamPage.css"

export default function MeetTheTeamPage() {
  return (
    <>
      <div className='meetTheTeam-page'>
        <h1>Meet The UVA Wheelchair Tennis Team</h1>
      </div>
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((teamMember) => (
            <Grid key={teamMember.name} item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  padding: 3,
                  textAlign: 'center',
                  marginBottom: 4,
                  color: 'var(--white)',
                  backgroundColor: 'var(--uva-dark-blue)',
                  border: '5px solid var(--uva-orange)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden', 
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
                  }}
                >
                  <img
                    src={teamMember.imageUrl}
                    alt={teamMember.name}
                    style={{
                      width: '100%',
                      height: '100%', 
                      objectFit: 'cover', 
                    }}
                  />
                </div>
                <Typography variant="h6" gutterBottom>
                  {teamMember.name}
                </Typography>
                <Typography variant="body1">{teamMember.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}