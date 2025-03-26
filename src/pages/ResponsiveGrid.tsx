import { Grid, Box, Card, CardContent, Typography } from "@mui/material";

const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={6}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6">Card {index + 1}</Typography>
                <Typography variant="body2">
                  This is a responsive card example.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
