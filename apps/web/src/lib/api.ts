export async function fetchUser(
  cookie: string | undefined
): Promise<any | null> {
  if (!cookie) return null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    headers: {
      Cookie: cookie || "",
    },
  });

  if (!res.ok) return null;

  return await res.json();
}
