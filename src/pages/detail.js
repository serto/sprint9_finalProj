import { useState, useEffect } from 'react';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';
import { Link, useParams } from 'react-router-dom';
import { DetailGameStyle, TagStyle, TagGroupStyle } from '../components/detailGame/detailGame.style';
import Loader from '../components/loader/loader';
import ImageSlider from '@s-ui/react-image-slider';

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

  useEffect(() => {
    axios
      .get(`https://rawg.io/api/games/${slug}?key=ab26bfc82b0b4c148f72b4dbbb5bc623`)
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

  return (
    <>
      <Header />
      <WrapperContent>

        {name ?

          <DetailGameStyle >

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


            <h3 className='t-tSection'>Descripción :</h3>
            <p className='t-tText'>{desc}</p>


            <h3 className='t-tSection'>Tiendas :</h3>
            {
              stores.map((store, key) => <p key={key}>{store.store.name} : <a href={store.store.domain} target="_blank" rel="noreferrer">{store.store.domain}</a></p>)
            }


            <h3 className='t-tSection'>Tags :</h3>
            <TagGroupStyle>
              {tags.map((tag, key) => <TagStyle key={key} ><span>{tag.name}</span> </TagStyle>)}
            </TagGroupStyle>

          </DetailGameStyle>

        :

          <Loader />

        }

      </WrapperContent>
    </>
  );

}

export default Detail;
