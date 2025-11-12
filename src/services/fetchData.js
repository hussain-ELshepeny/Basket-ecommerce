import { login } from "/src/services/login";

export async function getData(url, accessTokenRef) {
  let res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessTokenRef}` },
    credentials: "include",
  });
  // if (res.status === 500) {
  //   console.warn("Problems in server");
  // }
  if (res.status === 500) {
    const r = await fetch(
      "https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh",
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (!r.ok) {
      await login();
    }
    const result = await r.json();
    const newAccessToken = result.AccessToken;

    localStorage.setItem("accessToken", newAccessToken);
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${newAccessToken}` },
      credentials: "include",
    });
  }
  const data = await res.json();
  return data;
}

export async function postData(url, accessTokenRef, bodyData) {
  // accessTokenRef is variable in memory
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessTokenRef}`,
    },
    body: JSON.stringify(bodyData),
    credentials: "include",
  });

  if (res.status === 500) {
    console.warn("Problems in server");
  }

  if (res.status === 401) {
    const r = await fetch(
      "https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!r.ok) {
      await login();
    }
    const { AccessToken: newAccessToken } = await r.json();

    localStorage.setItem("accessToken", newAccessToken);
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newAccessToken}`,
      },
      body: JSON.stringify(bodyData),
      credentials: "include",
    });
  }
  const data = await res.json();
  return data;
}

export async function deleteData(url, accessTokenRef) {
  // accessTokenRef is variable in memory
  let res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessTokenRef}`,
    },
    credentials: "include",
  });

  if (res.status === 500) {
    console.warn("Problems in server");
  }

  if (res.status === 401) {
    const r = await fetch(
      "https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!r.ok) {
      await login();
    }

    const { AccessToken: newAccessToken } = await r.json();

    localStorage.setItem("accessToken", newAccessToken);

    res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${newAccessToken}`,
      },
      credentials: "include",
    });
  }

  const data = await res.json();
  return data;
}
