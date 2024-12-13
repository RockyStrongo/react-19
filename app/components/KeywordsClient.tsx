"use client";

import { useRouter } from "next/navigation";
import { useOptimistic } from "react";

interface IKeywordsClientProps {
  keywords: TKeyword[];
}

export default function KeywordsClient({ keywords }: IKeywordsClientProps) {
  const [optimisticKeywords, addOptimisticKeywords] = useOptimistic(
    keywords,
    (state, newKeyword: TKeyword) => [...state, newKeyword]
  );

  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    if (!formData.get("priority")) {
      return;
    }

    const newKeyword = {
      keyword: formData.get("keyword")?.toString() || "0",
      priority: parseFloat(formData.get("priority")?.toString() || "0"),
      isConditional: false,
      aircraftTypes: [] as { _id: string; aircraft: string }[],
    };

    addOptimisticKeywords({
      ...newKeyword,
      _id: String.fromCharCode(Math.random()),
    });

    const res = await fetch("http://localhost:8080/api/v1/keywords", {
      method: "POST",
      body: JSON.stringify(newKeyword),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    router.refresh();
  };

  return (
    <>
      <form className="flex gap-3" action={handleSubmit}>
        <input
          className="border border-black"
          type="text"
          name="keyword"
          id="keyword"
        />
        <input
          className="border border-black"
          type="number"
          name="priority"
          id="priority"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {optimisticKeywords.map((k, index) => (
          <li key={index}>- {k.keyword}</li>
        ))}
      </ul>
    </>
  );
}
