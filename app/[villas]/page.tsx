import VillaDetails from "../components/explore/VillaDetails";

export default async function VillasPage({
  params,
}: {
  params: { villas: string };
}) {
  // Await the promise to get the actual value
  const resolvedParams = await params;

  return (
    <VillaDetails params={resolvedParams} />
  );
}
