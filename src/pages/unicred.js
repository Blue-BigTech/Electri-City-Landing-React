import * as React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import './pages.css';
import Uni1Img from '../assets/Uni1.png';
import Uni2Img from '../assets/Uni2.png';
import Uni3Img from '../assets/Uni3.png';
import UniChatImg from '../assets/UniChat.png';
import UniWalletImg from '../assets/UniWallet.png';
import NurtleImg from '../assets/nurtle.jpg';
import UniCredLogoImg from '../assets/UniCredLogo.png';

export default function UniCred() {
  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <div className='unicred-banner padding-lr-10'>
          <p className='unicred-banner-description'>Promoting and raising awareness of Space Exploration, its benefits and my work to improve the world</p>
          <p className='unicred-banner-title'>ElectriCity Tech Ltd.</p>
        </div>
        <div className='ocean-banner-body'>
          <Grid container spacing={0}>
            <Grid item md={12} xs={12}>
              <div className='unicred-abstract padding-lr-5vw'>
                <p className='content-left text-fixed-size-35' textAlign="left">
                  Company description
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  ElectriCity is developing prototypes to evolve into a self-sustaining, harmless technology protecting its biodiversity and the world’s interest around the globe.
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  ElectriCity´s main goals are to produce these 3 projects in the coming years: UniCred (UNCR is the 1st FOREX crypto asset exchange with FIAT currencies in the world), Nurtle (Micro-plastic collector) and UniTrade (A Crypto/FOREX platform designed to stop the corruption of the crypto market). These projects are the base of ElectriCity and the future of the world.
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  Do you want to be a part of  it?
                </p><br/>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  Join us at ElectriCity Tech Ltd.
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  Help us shape the future.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='unitrade-banner padding-lr-10'>
          <Grid container spacing={0}>
            <Grid item md={12} xs={12}>
              <div className='unitrade-abstract padding-lr-5vw'>
                <p className='unicred-banner-title'>UniTrade</p>
                <p className='unicred-banner-description'>The main purpose of UniTrade is to change the way we see crypto exchange platforms by adding security and transparency tools for traders to visualize the monetary movements of UniTrade as well as having a “connect to wallet” system that avoids the platform from having access to your funds.</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="ocean-banner-body">
          <div className='width-80 padding-bottom-10vh'>
            <Grid container spacing={0} display={{md : 'none', xs : 'flex'}}>
              <Grid item xs={12}>
                <img className='img-original margin-top-10vh' src={UniChatImg}/>
              </Grid>
              <Grid item xs={12}>
                  <p className='content-left text-fixed-size-20 margin-top-10vh'>
                    UniChat is the first feature of this platform that we are releasing. It consist of a simple method of creating, adding and removing servers. The servers depending on how many people they can get in they will get a rank. Every time your server goes up a rank, you will receive prices. Basically as you progress and grow, prices will be rewarded for bringing more people to the platform.
                  </p>
              </Grid>

              <Grid item xs={12}>
                <img className='img-original margin-top-10vh' src={UniWalletImg}/>
              </Grid>
              <Grid item xs={12}>
                <p className='content-left text-fixed-size-20 margin-top-10vh'>
                  The main layer of security for the traders besides “connect to wallet” system is the auditing system that we have implemented in the platform, to gather all finances and show the public our financial history of that month. The platform will be audited every 30 days and the file will appear on the logs.
                </p>
              </Grid>

              <Grid item xs={12}>
                <img className='img-original margin-top-10vh' src={Uni1Img}/>
              </Grid>
              <Grid item xs={12}>
                <img className='img-original' src={Uni2Img}/>
              </Grid>
              <Grid item xs={12}>
                <img className='img-original' src={Uni3Img}/>
              </Grid>
            </Grid>

            <Grid container spacing={2} display={{xs : 'none', md : 'flex'}}>
              <Grid item md={5}>
                <img className='img-original margin-top-10vh' src={UniChatImg}/>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5}>
                <p className='content-left text-size-middle margin-top-15vh'>
                  UniChat is the first feature of this platform that we are releasing. It consist of a simple method of creating, adding and removing servers. The servers depending on how many people they can get in they will get a rank. Every time your server goes up a rank, you will receive prices. Basically as you progress and grow, prices will be rewarded for bringing more people to the platform.
                </p>
              </Grid>

              <Grid item md={5}>
                <p className='content-left text-size-middle margin-top-15vh'>
                  The main layer of security for the traders besides “connect to wallet” system is the auditing system that we have implemented in the platform, to gather all finances and show the public our financial history of that month. The platform will be audited every 30 days and the file will appear on the logs.
                </p>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5}>
                <img className='img-original margin-top-10vh' src={UniWalletImg}/>
              </Grid>

              <Grid item md={4}>
                <img className='img-original margin-top-10vh' src={Uni1Img}/>
              </Grid>
              <Grid item md={4}>
                <img className='img-original margin-top-10vh' src={Uni2Img}/>
              </Grid>
              <Grid item md={4}>
                <img className='img-original margin-top-10vh' src={Uni3Img}/>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="nurtle-banner-body">
          <div className='width-80 padding-bottom-10vh'>
            <Grid container spacing={0} display={{md : 'none', xs : 'flex'}}>
              <Grid item xs={12}>
                <img className='img-original margin-top-10vh' src={NurtleImg}/>
              </Grid>
              <Grid item xs={12}>
                <p className='content-center text-fixed-size-45 margin-top-10vh'>
                  Nurtle
                </p>
                <p className='content-left text-fixed-size-20'>
                  Nurtle offers a fresh perspective on how to get rid of micro-plastics and other micro-elements from different bodies of water, e.g. ponds, lakes, rivers…etc. In the future, we will expand to larger bodies of water like oceans and seas. Everyone has been making hollow promises to clean up the environment and the seas for the past ten years. OceanX is different because it offers a real solution to the issue before making any promises despite it having a working prototype that offers hope for this persistent issue that society keeps putting off.
                </p>
                <p className='content-left text-fixed-size-20'>
                  There are numerous risks associated with marine pollution that will be harmful not only to the health of marine animals but also to humankind.
                </p>
                <p className='content-left text-fixed-size-20'>
                  This design is the first of many that will aid to the preservation of the environment and the first step to battling those empty promises that silence the voice of reason and truth. 
                </p>
                <p className='content-left text-fixed-size-20'>
                  Join us in our mission to save the world and its inhabitants!
                </p>
                <p className='content-left text-fixed-size-20'>
                  The final design is complete under the newly formed company ElectriCity Tech Ltd. and every designed published is company property.
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={2} display={{xs : 'none', md : 'flex'}}>
              <Grid item md={6}>
                <img className='img-original margin-top-10vh' src={NurtleImg}/>
              </Grid>
              <Grid item md={1}/>
              <Grid item md={5}>
                <p className='content-center text-fixed-size-45 margin-top-10vh'>
                  Nurtle
                </p>
                <p className='content-left text-fixed-size-20'>
                  Nurtle offers a fresh perspective on how to get rid of micro-plastics and other micro-elements from different bodies of water, e.g. ponds, lakes, rivers…etc. In the future, we will expand to larger bodies of water like oceans and seas. Everyone has been making hollow promises to clean up the environment and the seas for the past ten years. OceanX is different because it offers a real solution to the issue before making any promises despite it having a working prototype that offers hope for this persistent issue that society keeps putting off.
                </p>
                <p className='content-left text-fixed-size-20'>
                  There are numerous risks associated with marine pollution that will be harmful not only to the health of marine animals but also to humankind.
                </p>
                <p className='content-left text-fixed-size-20'>
                  This design is the first of many that will aid to the preservation of the environment and the first step to battling those empty promises that silence the voice of reason and truth. 
                </p>
                <p className='content-left text-fixed-size-20'>
                  Join us in our mission to save the world and its inhabitants!
                </p>
                <p className='content-left text-fixed-size-20'>
                  The final design is complete under the newly formed company ElectriCity Tech Ltd. and every designed published is company property.
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className='smaller-banner'>
          <p className='ocean-banner-title'>Smaller Projects</p>
        </div>
        <div className="ocean-banner-body">
          <div className='width-90 padding-bottom-10vh'>
            <Grid container spacing={0} display={{md : 'none', xs : 'flex'}}>
              <Grid item xs={12}>
                <img className='img-original margin-top-10vh' src={UniCredLogoImg}/>
              </Grid>
              <Grid item xs={12}>
                <div className='margin-top-10vh'>
                  <p className='text-fixed-size-45'>UniCred</p>
                  <p className='text-fixed-size-20'>UniCred is a crypto asset that provides opportunity to the public to "flatten the curve" when it comes their home country's currency inflating.</p>
                  <p className='text-fixed-size-20'>UniCred at its core is methodized to provide a decentralized benchmark currency in order to circumvent increasing international exchange fees. There are 15 predominant currencies to which this benchmark applies : United States Dollar, Sterling Pound, Canadian Dollar, Swiss...</p>
                  <p className='text-fixed-size-20'>UniCred will collect a transaction fee and will available in CoinMarketCap in March 2023.</p>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2} display={{xs : 'none', md : 'flex'}}>
              <Grid item md={8}>
                <div className='margin-top-10vh'>
                  <p className='text-fixed-size-45'>UniCred</p>
                  <p className='text-fixed-size-20'>UniCred is a crypto asset that provides opportunity to the public to "flatten the curve" when it comes their home country's currency inflating.</p>
                  <p className='text-fixed-size-20'>UniCred at its core is methodized to provide a decentralized benchmark currency in order to circumvent increasing international exchange fees. There are 15 predominant currencies to which this benchmark applies : United States Dollar, Sterling Pound, Canadian Dollar, Swiss...</p>
                  <p className='text-fixed-size-20'>UniCred will collect a transaction fee and will available in CoinMarketCap in March 2023.</p>
                </div>
              </Grid>
              <Grid item md={1}/>
              <Grid item md={3}>
                <img className='img-original margin-top-10vh' src={UniCredLogoImg}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

