import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from './Helper/Head';
import PropTypes  from 'prop-types';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs, com o feed de fotos."/>
      <Feed />
    </section>
  )
};

Home.propTypes = {
  title: PropTypes.string
}

export default Home;
