type gtidPropsType<T> = {
  recods: T[];
  gridItemList: (item: T) => React.ReactNode;
};

type hasID = {
  id: number;
};
export default function GridList<T extends hasID>({
  recods,
  gridItemList,
}: gtidPropsType<T>) {
  const catyogryList =
    recods.length === 0
      ? "loding"
      : recods.map((item) => {
          return <div key={item.id}>{gridItemList(item)}</div>;
        });
  return <>{catyogryList}</>;
}
