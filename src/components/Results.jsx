import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';
export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search/q=Your Mom&num=40')
  }, [])

  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap jistify-between space-y-6 sm:px-56">
          {/* {results?.results?.map(( { link, title }) => (

          ))} */}
        </div>
      );
    case '/images':
      return 'IMAGES';
    case '/news':
      return 'NEWS';
    case '/videos':
      return 'VIDEOS';
  
    default:
      return 'ERROR';
  }
}
