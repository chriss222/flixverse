import { fetchTrendingData } from "../features/api/api";
import InfiniteScrollComponent from "../components/InfiniteScrollComponent";

export default function Home() {
  return (
    <InfiniteScrollComponent
      queryKey={["all-trending"]}
      queryFn={({ pageParam = 1 }) => fetchTrendingData(pageParam)}
      title="Trending This Week"
    />
  );
}
