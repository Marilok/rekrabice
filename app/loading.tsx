import { Loader } from "./mantineClientComponents";

export default function Loading() {
  return (
    <Loader
      color="green"
      size="xl"
      className="absolute inset-y-1/2	inset-x-1/2	"
    />
  );
}
