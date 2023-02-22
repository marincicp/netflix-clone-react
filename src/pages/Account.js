import SavedShows from "../components/SavedShows";
import SavedMovies from "../components/SavedShows";
function Account() {
  return (
    <>
      <div className="w-full  text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/3cee8404-4da5-4507-bd7b-3daa66da6210/HR-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="image"
        />
        <div className="absolute w-full left-0 h-[550px] top-0 bg-black/60"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;
