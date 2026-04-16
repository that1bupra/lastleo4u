"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [discord, setDiscord] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/1345807471528247489")
      .then(res => res.json())
      .then(data => setDiscord(data.data));
  }, []);

  return (
    <>
      {/* TOP SECTION (same as before) */}
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
          <h1 className="intro-animate" style={{ fontSize: "3rem", fontWeight: "700" }}>
            Hey, I'm Leo
          </h1>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>About</h2>
            <p style={{ color: "#aaa", maxWidth: "400px" }}>
              Hi, I'm Leo. I am a discord bot developer, with not too much experience.
              I use TypeScript/discord.js for my bots. I also like to code websites.
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Links</h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="https://github.com/yourname" target="_blank">GitHub</a>
              <a href="https://discord.com/users/1345807471528247489" target="_blank">Discord</a>
              <a href="https://guns.lol/lastleo4u" target="_blank">guns.lol</a>
            </div>
          </div>
        </div>
      </main>

      {/* NEW SECTION — Banner + GRC Info */}
      <section className="section">
        <img
          src="https://cdn.discordapp.com/attachments/1491451854763196557/1494424630797140210/Screenshot_2026-04-01_230539.png?ex=69e28ee5&is=69e13d65&hm=cf6746019146fd158f91ce82b672da7aa290f7bc1bfe8f833c984851650e24dd"
          className="banner"
        />

        <h1>Greenville Roleplay Community</h1>

        <p>
          I own/run Greenville Roleplay Community. I'm always tweaking things,
          making the community a better place.
        </p>

        <a
          className="red-btn"
          href="https://discord.gg/ZaPzyKvuzX"
          target="_blank"
        >
          <span>🔗</span> Join Server
        </a>
      </section>
    </>
  );
}
