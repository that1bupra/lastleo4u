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
    <main className="fade-in">
      <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Hey, I'm Leo</h1>

      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#aaa" }}>
        A short description about you goes here.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>About</h2>
        <p style={{ color: "#aaa", maxWidth: "500px", margin: "0 auto" }}>
          Write a simple about section here. Who you are, what you do, or anything else.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Links</h2>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          <a href="https://github.com/yourname" target="_blank">GitHub</a>
          <a href="https://discord.com/users/1345807471528247489" target="_blank">Discord</a>
          <a href="https://twitter.com/yourname" target="_blank">Twitter</a>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Discord Presence</h2>

        {discord ? (
          <p style={{ color: "#aaa" }}>
            {discord.discord_status === "online" && "🟢 Online"}
            {discord.discord_status === "idle" && "🟡 Idle"}
            {discord.discord_status === "dnd" && "🔴 Do Not Disturb"}
            {discord.discord_status === "offline" && "⚫ Offline"}
          </p>
        ) : (
          <p style={{ color: "#555" }}>Unable to load Discord status</p>
        )}
      </div>
    </main>
  );
}
