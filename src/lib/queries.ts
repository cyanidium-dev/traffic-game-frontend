export const allPostsQuery = `
  *[_type == "post"]  | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "description": description[$lang],
    "text": text[$lang],
    "image": image.asset->url,
  }
`;
