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

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "description": description[$lang],
    "text": text[$lang],
    "image": image.asset->url,
     }
`;

export const allVacanciesQuery = `
  *[_type == "vacancy"]  | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "description": description[$lang],
    "requirements": requirements[$lang],
    "offers": offers[$lang],
  }
`;

export const singleVacancyQuery = `
  *[_type == "vacancy" && slug.current == $slug][0]{
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "description": description[$lang],
    "requirements": requirements[$lang],
    "offers": offers[$lang],
     }
`;
