import Separator from "../components/ui/Separator";
import CharacterContainer from "../components/CharacterContainer";

const Home = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center my-6">Dashboard</h2>
      <div className="p-4">
        <Separator />
      </div>

      <CharacterContainer />
    </div>
  );
};

export default Home;
