"use client";
import { useState, useEffect } from "react";

export default function ScriptInjector() {
  const [open, setOpen] = useState(false);
  const [script, setScript] = useState("");
  const [isInjected, setIsInjected] = useState(false);

  // Load saved script on refresh
  useEffect(() => {
    const saved = localStorage.getItem("custom_script");
    if (saved) {
      setScript(saved);
      injectScript(saved);
      setIsInjected(true);
    }
  }, []);

  const injectScript = (scriptValue?: string) => {
    const value = scriptValue || script;

    try {
      const existing = document.querySelector(
        'script[data-custom="true"]'
      );
      if (existing) existing.remove();

      const scriptTag = document.createElement("script");

      const srcMatch = value.match(/src=["'](.*?)["']/);

      if (srcMatch && srcMatch[1]) {
        scriptTag.src = srcMatch[1];
      } else {
        scriptTag.innerHTML = value;
      }

      scriptTag.async = true;
      scriptTag.setAttribute("data-custom", "true");

      scriptTag.onload = () => {
        console.log(" Script loaded successfully");
      };

      scriptTag.onerror = () => {
        console.error(" Script failed to load");
      };

      document.body.appendChild(scriptTag);

      localStorage.setItem("custom_script", value);
      setOpen(false);
      setIsInjected(true);
    } catch (e) {
      console.error(e);
    }
  };


  const removeScript = () => {
    const existing = document.querySelector(
      'script[data-custom="true"]'
    );
    if (existing) existing.remove();

    localStorage.removeItem("custom_script");
    setIsInjected(false);
    setOpen(false);
    window.location.reload();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "40px",
          background: "#2563eb",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {isInjected ? "Manage Script" : "Add Script"}
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Paste Script
            </h2>

            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder="<script src='...'></script>"
              style={{
                width: "100%",
                height: "120px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            />

            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>

              {/* ✅ Toggle Button */}
              {!isInjected ? (
                <button
                  onClick={() => injectScript()}
                  style={{
                    background: "green",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "none",
                  }}
                >
                  Inject
                </button>
              ) : (
                <button
                  onClick={removeScript}
                  style={{
                    background: "red",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "none",
                  }}
                >
                  Remove Script
                </button>
              )}

              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "gray",
                  color: "#fff",
                  padding: "8px 12px",
                  border: "none",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  );
}