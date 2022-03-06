import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useStateContext } from '../contexts/StateContextProvider';
import ReactPlayer from 'react-player';
import Loader from './Loader';
export default function Results() {
  const { tab } = useParams();
  const { searchTerm, getResults, loading, setResults, results } = useStateContext();


  useEffect(()=>{
    // console.log('got tab: ',tab);
    // console.log('search term: ',searchTerm);
    if(searchTerm){
        if(tab=='videos'){
            getResults(`/search/q=${searchTerm} videos`);
        }else{
            getResults(`/${tab}/q=${searchTerm}&num=40`);
        }
        console.log('calling api');
    }else{
        setResults(null);
    }
  },[tab, searchTerm])
  console.log('results: ',results);

  if(loading) return <Loader />

  if(tab=='search'){
    return (
        <div className="flex flex-wrap">
            {
                results && results.results && results.results.map(({link, title, description})=>{
                    return (
                        <div key={link} className="p-6 sm:px-16 sm:w-1/2 space-y-6">
                            <a href={link} target="_blank">
                                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                                <p className="text-xl text-blue-700 dark:text-blue-300">{title}</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
  }else if(tab=='news'){
    return (
        <div className="flex flex-wrap">
            {
                results && results.entries && results.entries.map(({id, title, link, source})=>{
                    return (
                        <div key={id} className="p-6 sm:px-16 sm:w-1/2 space-y-6">
                            <a href={link}>
                                <p className="text-xl text-blue-700 dark:text-blue-300">{title}</p>
                            </a>
                            <a href={source?.href}>
                                <p className="text-sm">{source?.href}</p>
                            </a>     
                        </div>
                    )
                })
            }
        </div>
    )
  }else if(tab=='images'){
    return (
        <div className="flex flex-wrap justify-center items-center">
            {
                results && results.image_results && results.image_results.map(({image, link})=>{
                    return (
                        <div key={image?.src} className="p-4 sm:w-1/6 w-1/2 space-y-2">
                            <div className="image">
                                <a href={image?.src} target="_blank">
                                    <img src={image?.src} alt={image?.alt} loading="lazy" className="h-40 w-auto" />
                                </a>
                            </div>
                            <div className="description">
                                <a href={link.href} className="hover:underline" target="_blank">
                                    <p className="font-x">{link?.title?.split('...')[0]}</p>
                                    <p className="font-xx">{link?.title?.split('...')[1]}</p>
                                </a>
                            </div>
                              
                        </div>
                    )
                })
            }
        </div>
    )
  }else if(tab=='videos'){
    return (
        <div className="flex mt-3 flex-wrap justify-center sm:items-center">
            {
                results && results.results && results.results.map(({link, title, description, cite})=>{
                    return (
                        <div key={link} className="sm:m-4 sm:ml-0 ml-2 sm:pr-8 sm:w-2/3 space-y-2 mb-8">
                            <div className="videoLinks">
                                <a href={cite?.domain?.split('›')[0]} target="_blank" className="hover:underline">
                                    <p className="font-xx">{cite?.domain}</p>
                                </a>
                            </div>
                            <div className="flex">
                                <div className="video">
                                    <ReactPlayer className="rounded-xl" url={link} controls width="300px" height="170px" />
                                </div>
                                <div className="ml-2 hidden sm:block">
                                    <a href={link} target="_blank">
                                        <p className="text-lg hidden sm:block text-blue-700 dark:text-blue-300">{title}</p>
                                    </a>
                                    <p>{description}</p> 
                                </div>
                            </div>
                            <div className="mobileTitle sm:hidden block">
                                <a href={link} target="_blank">
                                    <p className="text-lg text-blue-700 dark:text-blue-300">
                                        {
                                            title?.length>25? title.substring(25)+'...':title
                                        }
                                    </p>
                                </a>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
  }else{
      return null;
  }
}
