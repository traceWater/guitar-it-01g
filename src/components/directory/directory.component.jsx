import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from './directory.styles';

const categories = [
    {
      "id": 1,
      "title": "Acustic",
      "imageUrl": "https://i.ibb.co/LgGyzvK/a-breedloveoregon.jpg",
      "route": "shop/acustic",
    },
    {
      "id": 2,
      "title": "Electric",
      "imageUrl": "https://i.ibb.co/9t0qXQd/prsproduct.jpg",
      "route": "shop/electric",
    }
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory;