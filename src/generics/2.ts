type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type TopType = Pick<AllType, 'name' | 'color'>;
type BottomType = Pick<AllType, 'position' | 'weight'>;

function compare<T extends TopType, U extends BottomType>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}