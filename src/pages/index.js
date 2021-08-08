import Head from 'next/head'
import Image from 'next/image'
import Container from '@material-ui/core/Container';
import CustromCard from '../components/CustromCard'
import Grid from '@material-ui/core/Grid';

import PersionIcon from '../assets/icons/PersionIcon'
import Moneysvg from '../assets/icons/Moneysvg'
import Graphsvg from '../assets/icons/Graphsvg'
import Handsvg from '../assets/icons/Handsvg'

const data = [
  {
    icon: <PersionIcon />,
    title: 'New Leds',
    amount: '205',
    color: '#663399',
    colorlight: '#F2F1FE'
  },
  {
    icon: <Handsvg />,
    title: 'Sales',
    amount: '$4021',
    color: '#3981F7',
    colorlight: '#C5DBFF'
  },
  {
    icon: <Graphsvg />,
    title: 'Orders',
    amount: '80',
    color: '#5DAE49',
    colorlight: '#BCDDB3'
  },
  {
    icon: <Moneysvg />,
    title: 'Expense',
    amount: '$1200',
    color: '#FFC620',
    colorlight: '#FFF6E0'
  },
]
export default function Home() {
  return (
    < >
      <Grid container>
        {
          data && data.map((item, i) => {
            return (
              <Grid item xs={12} md={3} sm={12} key={i}>
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
      </Grid>
    </>
  )
}
