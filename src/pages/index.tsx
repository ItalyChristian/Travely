import { Fragment } from 'react'

import Head from 'next/head'
import MainSlider from 'components/MainSlider';
import SearchFilters from 'components/SearchFilters';
import OfferServices from 'components/OfferServices';
import CardsSlider from 'components/CardsSlider';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Travely</title>
        <meta name="description" content="Leave and Live Now!" />
      </Head>
      <MainSlider />
      <SearchFilters />
      <OfferServices />
      <CardsSlider />
    </Fragment>
  )
}

export default Home;