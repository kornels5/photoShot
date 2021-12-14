import { Basic } from 'unsplash-js/dist/methods/photos/types';
interface Photo {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}

const Photo: React.FC<{ photo: Basic }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <img className="img" src={urls.regular} alt="photo?" />
      <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}>
        {user.name}
      </a>
    </>
  );
};

export default Photo;
