import useSWR from "swr";

const Characters = () => {
  const fetcher = async (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );
  console.log("🚀 ~ file: Characters.jsx:6 ~ Characters ~ data:", data);

  return (
    <>
      <div className="lg:w-full lg:h-[100vh] lg:flex lg:flex-wrap lg:justify-around">
        {data?.results.map((item) => {
          return (
            <>
              <div className="w-full  mt-[20px] flex justify-center items-center border-solid border-2 border-cyan-400 lg:h-[56%] lg:w-[20%] lg:flex-wrap lg:border-solid lg:border-2 lg:border-indigo-600 lg:rounded-md lg:ml-[10px] lg:mb-[20px]">
                <img
                  src={item.image}
                  alt=""
                  className=" w-[100px] lg:w-[300px] lg:h-[300px] lg:rounded"
                />
                <div className=" w-80 flex flex-col items-center lg:h-[25%] lg:w-full lg:flex lg:flex-wrap">
                  <h1 className="h-[70%] text-center lg:h-[40%] mt-[10px]">
                    {item.name}
                  </h1>
                  <button className="h-[30%] mt-[10px] shadow-lg shadow-cyan-500/50 bg-cyan-500 rounded-full w-40 lg:m-0">
                    See More
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
