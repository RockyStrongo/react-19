"use client";

import { Suspense, use } from "react";

interface IPermissionsProps {
  permPromise: Promise<any>;
}

export default function Permissions({ permPromise }: IPermissionsProps) {
  const permissions = use(permPromise);
  return (
    <div className="mt-2">
      <Suspense fallback={<div>loading...</div>}>
        {permissions.map((p: any) => (
          <div key={p._id}>{p._id}</div>
        ))}
      </Suspense>
    </div>
  );
}
