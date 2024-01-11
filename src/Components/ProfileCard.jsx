import bg from "../assets/blue.jpg";

const ProfileCard = ({ data }) => {
  return (
    <div>
      <div className="mr-3 border-2 border-slate-100 bg-white p-5">
        <div className="bg-url relative mx-auto flex h-24 justify-center">
          <img src={bg} alt="" className="w-full object-cover" />
          <img
            src={data.avatar_url}
            alt=""
            className="absolute top-0 h-24 w-auto translate-y-1/2 rounded-full border-2 border-white object-cover"
          />
        </div>
        <div className="my-5 mt-12 flex flex-col items-center justify-center">
          <p className="font-bold">{data.name}</p>
          <p className="text-[14px] capitalize text-slate-400">
            Software engineer
          </p>
        </div>
        <div className="flex justify-center gap-x-6">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{data.public_repos}</span>
            <span className="text-[14px] text-slate-400">Repos</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{data.followers}</span>
            <span className="text-[14px] text-slate-400">Following</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{data.following}</span>
            <span className="text-[14px] text-slate-400">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
