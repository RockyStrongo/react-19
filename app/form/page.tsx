"use server";
import KeywordsClient from "../components/KeywordsClient";

const getKeywords = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Fake 3-second delay

  const res = await fetch("http://localhost:8080/api/v1/keywords");
  return (await res.json()) as any[];
};

export default async function Page() {
  const keywords = await getKeywords();

  return <KeywordsClient keywords={keywords} />;
}
