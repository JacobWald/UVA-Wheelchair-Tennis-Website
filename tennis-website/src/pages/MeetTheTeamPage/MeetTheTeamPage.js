import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

import { teamMembers } from '../../teamInfo/teamMembers';

export default function MeetTheTeamPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        The UVA Wheelchair Tennis Team
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((teamMember) => (
          <Grid key={teamMember.name} item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                background: 'linear-gradient(to bottom, #f7f7f7, #e3e3e3)',
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '50%',
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
              <Typography variant="subtitle1" gutterBottom>
                {teamMember.major}
              </Typography>
              <Typography variant="body1">{teamMember.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}