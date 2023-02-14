import React from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';
import { NewTweet, TweetCard } from '../components/TweetCard';
import { Contexto_Data } from '../context/Context';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

export function Descubrir() {
  const { tweets } = useContext(Contexto_Data);
  let a = JSON.parse(localStorage.getItem('Mensajes'));

  if (localStorage.getItem('Mensajes') === null || a.length === 0 || localStorage.getItem('Mensajes') == []) {
    return (
      <>
        <Logo login={false}/>
        <Navbar />
        <div className='tweet-list col-sm-10 col-md-8 mx-auto'>
          <NewTweet />
          <div className='message-empty'>
            <FontAwesomeIcon icon="fa-solid fa-face-dizzy" />
            <p>
              Ow.. parece que no hay tweets
              <span className='d-block'>Empieza publicando uno</span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Logo login={false} />
      <Navbar />
      <div className='tweet-list col-sm-10 col-md-8 mx-auto'>
        <NewTweet />
        {tweets.map((t, index) => (
          <TweetCard key={index} objeto={t} />
        ))}
      </div>
    </>
  );
}
