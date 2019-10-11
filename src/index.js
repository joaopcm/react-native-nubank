import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes'

export default function Nubank() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Routes />
    </>
  );
}