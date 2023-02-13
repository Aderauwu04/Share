import React from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';
import { NewTweet, TweetCard } from '../components/TweetCard';
import '../fontawesome';

export function Descubrir() {
  return (
    <>
      <Logo />
      <Navbar />
      <NewTweet />
      <TweetCard />
    </>
  );
}
