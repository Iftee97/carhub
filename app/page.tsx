import Hero from "@/components/Hero"
import SearchBar from "@/components/SearchBar"
import CustomFilter from "@/components/CustomFilter"
import CarCard from "@/components/CarCard"
import ShowMore from "@/components/ShowMore"
import { fetchCars } from "@/utils"
import { HomeProps } from "@/types"
import { fuels, yearsOfProduction } from "@/constants"

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars // empty array or null or undefined

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">
              oops, no results
            </h2>
            <p>
              {allCars?.message}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
