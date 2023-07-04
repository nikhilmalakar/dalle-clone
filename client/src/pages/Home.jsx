import React, {useState, useEffect} from 'react';
import {Card, Loader, FormField} from '../components';


  // Render Cards from input data
  const RenderCards = ({data, title}) => {
    if(data.length > 0){
      return data.map((post) => <Card key={post._id} {...post} />) 
    }

    return (
      <h2 className='mt-5 font-bold text-[#222328] text-xl uppercase'>{title}</h2>
    )
  }

  // Home Component 

export const Home = () => {
  
  const [loader, setLoader] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchPost, setSetsearchPost] = useState("");

  return (
    <section className='max-w-7xl mx-auto '>
      <div>
        <h1 className='font-bold text-[#222328] text-[32px]'>Explore!</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Welcome to the world of Aritficial Intelligence</p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-14'>
        {
          loader ?
          <div className='flex justify-center items-center'><Loader /></div> 
          :
          <div>{
              searchPost && 
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing results for <span className='text-[#222328]'>{searchPost}</span>
              </h2>
            }

            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-3'>
              {searchPost ? 
                <RenderCards 
                  data={[]}
                  title="No results found"/>
                :
                <RenderCards 
                  data={[]}
                  title="No post found"
                  />
              }
            </div>
          </div>
        }
      </div>

    </section>
  )
}
