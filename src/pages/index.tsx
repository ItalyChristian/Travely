import { Fragment } from 'react'

import Head from 'next/head'
import MainSlider from 'components/Slider';
const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Travely</title>
        <meta name="description" content="Desenvolvemos softwares sob medida para as necessidades da sua empresa." />
      </Head>
      <MainSlider />
    </Fragment>
  )
}

export default Home;