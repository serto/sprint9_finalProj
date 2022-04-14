import { useState, useEffect } from 'react';

import Header from '../components/header/header';
import { WrapperContent, WrapperFlex } from '../assets/styles/styles';
import { Link, useParams } from 'react-router-dom';
import { DetailGameStyle, TagStyle, TagGroupStyle } from '../components/detailGame/detailGame.style';
import Loader from '../components/loader/loader';
import ImageSlider from '@s-ui/react-image-slider';
import { Api_Key } from "../application/api_key";
import Footer from '../components/footer/footer';

import { getGameFromBBDD } from '../application/api';
import GameBoxInDetail from '../components/gameBox/gameBoxInDetail';

import axios from "axios";

const Detail = (_) => {

  const { slug } = useParams();

  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();
  const [genres, setGenres] = useState([]);
  const [valMetacritic, setValMetacritic] = useState();
  const [platforms, setPlatforms] = useState([]);
  const [website, setWebsite] = useState();
  const [lanza, setLanza] = useState();
  const [imagesSlide, setImagesSlide] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [stores, setStores] = useState([]);
  const [tags, setTags] = useState([]);
  const [gamesOfUsers, setGamesOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rawg.io/api/games/${slug}?key=${Api_Key}`)
      .then((res) => {
        //console.log(res);
        console.log(res.data);
        const game = res.data;
        setName(game.name);
        setDesc(game.description_raw);
        setImg(game.background_image);
        setGenres(game.genres);
        setValMetacritic(game.metacritic);
        setPlatforms(game.platforms);
        setWebsite(game.website);
        setLanza(game.released);
        setDevelopers(game.developers);
        setStores(game.stores);
        setTags(game.tags);

        const imagesSl = {
          images: [
            {
              src: game.background_image,
              alt: game.name,
            },
            {
              src: game.background_image_additional,
              alt: game.name,
            }
          ]
        }



        setImagesSlide(imagesSl);

      });
  }, []);

  useEffect(() => {

    const gamesOfUsers = getGameFromBBDD(name);
    const gamesArray = [];
    
    gamesOfUsers.then(res => {
      console.log('aki estem');
      res.forEach((doc) => {
        const obj = {
          id: doc.id,
          game: doc.data()
        }
        
        gamesArray.push(obj);
      });
      
      setGamesOfUsers(gamesArray);
      console.log(gamesArray)

    }).catch(error => {
      console.log('error ', error);
    });

  }, [name])


  return (
    <>
      <Header />
      <WrapperContent>

        {name ?

          <DetailGameStyle >

            <p><Link to="/">Back</Link></p>

            <div className='detail'>

              <div className='detail__image'>
                <img src={img} alt={name} />
                { /* <ImageSlider {...imagesSlide} /> */}
              </div>

              <div className='detail__content'>
                <h2 className='t-title'>{name}</h2>

                <p>Desarrolladores: {developers.map((developer, key) => <span key={key}>{developer.name} / </span>)}</p>
                <p>Plataformas: {platforms.map((platform, key) => <span key={key}>{platform.platform.name} / </span>)} </p>

                <p>Géneros: {genres.map((genre, key) => <span key={key}>{genre.name} / </span>)}</p>
                <p>Lanzamiento: <span>{lanza}</span></p>

                <p>Valoración Metacritic: <span>{valMetacritic}</span></p>
                <p>Website : <span><a href={website} target="_blank" rel="noreferrer">{website}</a></span></p>
              </div>

            </div>

            <div className='detail__info'>

              <h3 className='t-tSection'>Descripción :</h3>
              <p className='t-tText'>{desc}</p>

              <h3 className='t-tSection'>Tiendas :</h3>
              {
                stores.map((store, key) => <p key={key} className='storeGame'>{store.store.name} : <a href={store.store.domain} target="_blank" rel="noreferrer">{store.store.domain}</a></p>)
              }

              { (gamesOfUsers.length > 0) &&
                <>
                  <h3 className='t-tSection'>Juegos de usuarios:</h3>
                  <WrapperFlex>
                    { gamesOfUsers.map((game, key) => <GameBoxInDetail key={key} game={game} type="card" /> )}
                  </WrapperFlex>
                </> 
              }


              <h3 className='t-tSection'>Tags :</h3>
              <TagGroupStyle>
                {tags.map((tag, key) => <TagStyle key={key} ><span>{tag.name}</span> </TagStyle>)}
              </TagGroupStyle>

            </div>

          </DetailGameStyle>

        :

          <Loader />

        }

        

      </WrapperContent>
      <Footer />
    </>
  );

}

export default Detail;
