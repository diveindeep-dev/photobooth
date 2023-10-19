type Orders = 'first' | 'second' | 'third' | 'fourth';

type Cuts = {
  [key in Orders]: string;
};

type Colors = 'rose' | 'indigo' | 'blue' | 'emerald' | 'gray' | 'slate';

interface Custom {
  title: string;
  folder: string;
}

interface Code {
  [key: string]: Custom;
}
