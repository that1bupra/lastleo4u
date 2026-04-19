"use client";

import { useEffect, useState } from "react";

type Activity = {
  type: number;
  name: string;
  state?: string;
  details?: string;
};

type LanyardData = {
  discord_user: {
    id: string;
    avatar: string;
    global_name: string;
  };
  discord_status: string;
  activities: Activity[];
};

export default function Home() {
  const [discord, setDiscord] = useState<LanyardData | null>(null);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/1345807471528247489")
      .then((res) => res.json())
      .then((data) => setDiscord(data.data));
  }, []);

  return (
    <>
      <main className="fade-in container">
        <div className="left">
          <div className="discord-card">
            {!discord ? (
              <p style={{ color: "#555" }}>Loading...</p>
            ) : (
              <>
                <img
                  src={`https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png?size=256`}
                  className="discord-avatar"
                  alt={`${discord.discord_user.global_name}'s Discord avatar`}
                />

                <h2 className="discord-name">{discord.discord_user.global_name}</h2>

                <div className="discord-status">
                  {discord.discord_status === "online" && "🟢 Online"}
                  {discord.discord_status === "idle" && "🟡 Idle"}
                  {discord.discord_status === "dnd" && "🔴 Do Not Disturb"}
                  {discord.discord_status === "offline" && "⚫ Offline"}
                </div>

                {discord.activities?.find((a) => a.type === 4) && (
                  <p className="discord-custom">
                    {discord.activities.find((a) => a.type === 4)?.state}
                  </p>
                )}

                {discord.activities?.find((a) => a.type !== 4) ? (
                  <div className="discord-activity">
                    <p style={{ fontWeight: "600", marginBottom: "0.3rem" }}>Activity</p>

                    {discord.activities
                      .filter((a) => a.type !== 4)
                      .map((activity, i) => (
                        <div key={i} className="activity-box">
                          <p style={{ fontSize: "0.95rem" }}>
                            <strong>{activity.name}</strong>
                          </p>

                          {activity.state && (
                            <p style={{ color: "#aaa", fontSize: "0.85rem" }}>{activity.state}</p>
                          )}

                          {activity.details && (
                            <p style={{ color: "#aaa", fontSize: "0.85rem" }}>
                              {activity.details}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                ) : (
                  <p style={{ color: "#777", marginTop: "1rem" }}>No active apps</p>
                )}
              </>
            )}
          </div>
        </div>

        <div className="right">
          <h1 className="intro-animate" id="intro-text">
            Hey, I&apos;m Leo
          </h1>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>About</h2>
            <p style={{ color: "#aaa", maxWidth: "400px" }}>
              Hi, I&apos;m Leo. I am a discord bot developer, with not too much experience. I
              use TypeScript/discord.js for my bots. I also like to code websites.
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Links</h2>
            <div className="link-buttons">
              <a className="btn" href="https://github.com/that1bupra" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                className="btn"
                href="https://discord.com/users/1345807471528247489"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
              <a className="btn" href="https://guns.lol/lastleo4u" target="_blank" rel="noreferrer">
                guns.lol
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <img src="/banner.png" className="banner" alt="Greenville Roleplay Community banner" />

        <h1>Greenville Roleplay Community</h1>

        <p>
          I own/run Greenville Roleplay Community. I&apos;m always tweaking things, making the
          community a better place.
        </p>

        <a
          className="btn join-btn"
          href="https://discord.gg/ZaPzyKvuzX"
          target="_blank"
          rel="noreferrer"
        >
          <span>🔗</span> Join Server
        </a>
      </section>
    </>
  );
}
