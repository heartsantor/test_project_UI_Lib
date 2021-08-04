import Head from 'next/head'
import Image from 'next/image'
import Container from '@material-ui/core/Container';
import CustromCard from '../components/CustromCard'
import Grid from '@material-ui/core/Grid';

import PersionIcon from '../assets/icons/PersionIcon'

const data = [
  {
    icon: <PersionIcon />,
    title: 'New Leds',
    amount: '205',
    color: '',
    colorlight: ''
  },
  {
    icon: <PersionIcon />,
    title: 'Sales',
    amount: '$4021',
    color: '#3981F7',
    colorlight: '#C5DBFF'
  },
  {
    icon: <PersionIcon />,
    title: 'Orders',
    amount: '80',
    color: '#5DAE49',
    colorlight: '#BCDDB3'
  },
  {
    icon: <PersionIcon />,
    title: 'Expense',
    amount: '$1200',
    color: '#FFC620',
    colorlight: '#FFF6E0'
  },
]
export default function Home() {
  return (
    <Container >
      <Grid container>
        {
          data && data.map((item) => {
            return (
              <Grid item xs={3} md={3} sm={12}>
                <CustromCard
                  icon={item.icon}
                  title={item.title}
                  amount={item.amount}
                  colorlight={item.colorlight}
                  color={item.color}
                />
              </Grid>
            )
          })
        }
        {/* <Grid item xs={3} md={3} sm={12}>
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
        </Grid> */}
      </Grid>
    </Container>
  )
}
