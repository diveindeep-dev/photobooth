type Orders = 'first' | 'second' | 'third' | 'fourth';

type Cuts = {
  [key in Orders]: string;
}