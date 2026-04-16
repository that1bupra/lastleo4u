async function getDiscordStatus() {
  const res = await fetch("https://api.lanyard.rest/v1/users/1345807471528247489", {
    cache: "no-store"
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data?.data;
}

export default async function Home() {
  const discord = await getDiscordStatus();

  return (
    <main className="fade-in container">
      {/* LEFT SIDE — Discord Presence */}
      <div className="left">
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Discord</h2>

        {discord ? (
          <p style={{ color: "#aaa" }}>
            {discord.discord_status === "online" && "🟢 Online"}
            {discord.discord_status === "idle" && "🟡 Idle"}
            {discord.discord_status === "dnd" && "🔴 Do Not Disturb"}
            {discord.discord_status === "offline" && "⚫ Offline"}
          </p>
        ) : (
          <p style={{ color: "#555" }}>Loading...</p>
        )}
      </div>

      {/* RIGHT SIDE — Main Content */}
      <div className="right">
        <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Hey, I'm Leo</h1>

        <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#aaa" }}>
          A short description about you goes here.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>About</h2>
          <p style={{ color: "#aaa", maxWidth: "400px" }}>
            Write a simple about section here. Who you are, what you do, etc.
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Links</h2>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="https://github.com/yourname" target="_blank">GitHub</a>
            <a href="https://discord.com/users/1345807471528247489" target="_blank">Discord</a>
            <a href="https://twitter.com/yourname" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
    </main>
  );
}
