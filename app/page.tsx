"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [discord, setDiscord] = useState(null);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/1345807471528247489")
      .then((res) => res.json())
      .then((data) => setDiscord(data.data));
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      {/* Banner */}
      <img src="/banner.png" className="banner" />

      {/* Discord Profile Card */}
      <div className="discord-card">
        {!discord ? (
          <p style={{ color: "#555" }}>Loading...</p>
        ) : (
          <>
            {/* Avatar */}
            <img
              src={`https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png?size=256`}
              className="discord-avatar"
            />

            {/* Name */}
            <h2 className="discord-name">{discord.discord_user.global_name}</h2>

            {/* Status */}
            <div className="discord-status">
              {discord.discord_status === "online" && "🟢 Online"}
              {discord.discord_status === "idle" && "🟡 Idle"}
              {discord.discord_status === "dnd" && "🔴 Do Not Disturb"}
              {discord.discord_status === "offline" && "⚫ Offline"}
            </div>

            {/* Custom Status */}
            {discord.activities?.find((a) => a.type === 4) && (
              <p className="discord-custom">
                {discord.activities.find((a) => a.type === 4).state}
              </p>
            )}

            {/* Activity */}
            {discord.activities?.find((a) => a.type !== 4) ? (
              <div className="discord-activity">
                <p style={{ fontWeight: "600", marginBottom: "0.3rem" }}>
                  Activity
                </p>

                {discord.activities
                  .filter((a) => a.type !== 4)
                  .map((activity, i) => (
                    <div key={i} className="activity-box">
                      <p style={{ fontSize: "0.95rem" }}>
                        <strong>{activity.name}</strong>
                      </p>

                      {activity.state && (
                        <p style={{ color: "#aaa", fontSize: "0.85rem" }}>
                          {activity.state}
                        </p>
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
              <p style={{ color: "#777", marginTop: "1rem" }}>
                No active apps
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
}
