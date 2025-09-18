import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country';

// Promise of Api
const countriesPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback = {
        <h1>Loading!</h1>
      }>
        <Countries countries_promise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
