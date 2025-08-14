export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Epoques',
    to: '/epoques',
    children: [
      { label: 'Medieval', to: '/epoques/medieval' },
      { label: 'Renaissance', to: '/epoques/renaissance' },
      { label: 'Baroque', to: '/epoques/baroque' },
      { label: 'Vienna Classic', to: '/epoques/vienna-classic' },
      { label: 'Romantic', to: '/epoques/romantic' },
      { label: 'Modern', to: '/epoques/modern' },
    ],
  },
  { label: 'Genres', to: '/genres' },
  { label: 'Gallery', to: '/gallery' },
];
