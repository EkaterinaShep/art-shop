import { ArtItem } from './art-item.model.mjs';

async function getAll({ limit, offset }) {
  // TODO: find and count all
  return await ArtItem.findAll({ limit, offset });
}

async function addArtItem(artItem) {
  return await ArtItem.create(artItem);
}

export { addArtItem, getAll };
