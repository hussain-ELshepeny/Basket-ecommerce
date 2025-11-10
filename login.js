export default async function login() {
      try {
        const result = await fetch(
          "https://e-commarce-website-eight.vercel.app/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Phone: "01190972089",
              Password: "Omar@134@@@",
            }),
          }
        );
        const data = await result.json();
        console.log(data)
        localStorage.setItem("accessToken", data.AccessToken);
      } catch (error) {
        console.log(error);
      }
    }
    