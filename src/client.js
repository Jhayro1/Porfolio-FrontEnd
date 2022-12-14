import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '6w9wvhi0',
  dataset: 'production',
  apiVersion: '2022-12-07',
  useCdn: true,
  token: 'skyZ2Cg5maVuNLNr0NFkysjm7LzItYXIivb0XDPwou8e9Hspjz0pdzbzlktBGtNxT1Pq6mIlAHXr8lhDKRuTj05hW3ProasBzaXutXHX0mDuCe2Q15b3KeKc6pW6nho2KSVMOf97ooIy2sYrJAlQD51Dz78bCmKT5Z7Zy7BoYhT6PGWbwClE',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
