export async function login() {
  try {
    const res = await fetch(
      "https://e-commarce-website-eight.vercel.app/api/v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Phone: "01190972089",
          Password: "Omar@134@@@",
        }),
        credentials: "include",
      }
    )

    const data = await res.json()
    // console.log(data.user.id)
    localStorage.setItem("accessToken", data.AccessToken)
    localStorage.setItem("userId", data.user?.id)
    console.log(" Logged in successfully")
  } catch (err) {
    console.error(" Login failed:", err)
  }
}
