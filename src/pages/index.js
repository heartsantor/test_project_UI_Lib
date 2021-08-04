import Head from 'next/head'
import Image from 'next/image'

import CustromCard from '../components/CustromCard'
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    < >
     <Grid container>
     <Grid item xs={3} md={3} sm={12}>
        <CustromCard />
      </Grid>
      <Grid item xs={3} md={3} sm={12}>
        <CustromCard />
      </Grid>
      <Grid item xs={3} md={3} sm={12}>
        <CustromCard />
      </Grid>
      <Grid item xs={3} md={3} sm={12}>
        <CustromCard />
      </Grid>
     </Grid>
    </>
  )
}
