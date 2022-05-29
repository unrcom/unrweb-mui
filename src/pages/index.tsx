import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Grid container spacing={0} className="margin-top60">
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography variant="h3">Welcome to unremoted.com</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
