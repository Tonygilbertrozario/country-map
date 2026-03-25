
import { Suspense } from 'react'
import './App.css'
import Countries from './compunants/contries/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
 
  return (
    <>
    <Suspense fallback={<p>Countries is Loading.....</p>}>
      <Countries countriesPromise= {countriesPromise}></Countries>
      </Suspense>          
    </>
  )
}

export default App
