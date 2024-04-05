import React, { useEffect, useState } from 'react'
import Search from '../components/ui/Search'
import { useParams } from 'react-router-dom'
import Results from '../components/Results'

function Movies() {
  return (
    <div>
        <Search />
        <Results />
    </div>
  )
}

export default Movies