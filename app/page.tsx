import AnimeCard, { AnimeProp } from '@/components/AnimeCard'
import LoadMore from '../components/LoadMore'
import { data } from './_data'

async function Home() {
  return (
    <main className="py-16 max-lg:px-8 flex flex-col gap-10 container mx-auto ">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  )
}

export default Home
