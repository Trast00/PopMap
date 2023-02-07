import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function Detail(props) {
  const {topLevelDomain} = useParams()
  return (
    <div>
      <Header name={topLevelDomain} canBack={true} />
      Detail
    </div>
  )
}

export default Detail
