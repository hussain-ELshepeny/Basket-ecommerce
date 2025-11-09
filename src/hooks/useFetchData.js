export async function FetchData(url, accessTokenRef) {
  // accessTokenRef is variable in memory
  let res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessTokenRef}` },
  });

  if (res.status === 401) {
    const r = await fetch("https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh", {
      method: "POST",
    });
    if (!r.ok) {
      throw new Error("Session expired");
    }
    const { accessToken: newAccessToken} = await r.json();
    // is this right ? 
    localStorage.setItem("accessToken", newAccessToken) 
    accessTokenRef = newAccessToken; 
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessTokenRef}` },
    });
  }
    const data = await res.json();
  return data;
}
