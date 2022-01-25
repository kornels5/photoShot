import Photo from './Photo';

function PhotoGrid({ photos }: any) {
  console.log('photos: ', photos);

  return photos.map((photo: any) => <Photo photo={photo} />);
}

export default PhotoGrid;
