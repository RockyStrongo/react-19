export const getPermissions = async () => {
  const res = await fetch("http://localhost:8080/api/v1/permissions");
  return (await res.json()) as any;
};
