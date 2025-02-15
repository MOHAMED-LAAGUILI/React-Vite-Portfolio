import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor"),
      cursorRing = document.getElementById("cursor-ring"),
      body = document.querySelector("body"),
      heroSection = document.querySelector(".hero"),
      footerSection = document.querySelector("#footer");

    let cursorFlareTimeout;
    let cursorColor = localStorage.getItem("cursorColor") || "#7002ee";
    let ringColor = localStorage.getItem("cursorRingColor") || "rgb(255, 255, 255)";
    let flareColor = localStorage.getItem("cursorFlareColor") || "#ffffff";

    function isCursorInSection(e, r) {
      if (!r) return false;
      const o = r.getBoundingClientRect();
      return (
        e.clientX >= o.left &&
        e.clientX <= o.right &&
        e.clientY >= o.top &&
        e.clientY <= o.bottom
      );
    }

    function updateCursorColors(e, r, o) {
      document.documentElement.style.setProperty("--cursor-color", e);
      document.documentElement.style.setProperty("--cursor-ring-color", r);
      document.documentElement.style.setProperty("--flare-color", o);
    }

    function saveCursorColors(e, r, o) {
      localStorage.setItem("cursorColor", e);
      localStorage.setItem("cursorRingColor", r);
      localStorage.setItem("cursorFlareColor", o);
    }

    function createCursorFlare(e, r) {
      cursorFlareTimeout && clearTimeout(cursorFlareTimeout);
      const o = document.createElement("div");
      o.classList.add("cursor-flare");
      body.appendChild(o);
      o.style.left = e + "px";
      o.style.top = r + "px";
      setTimeout(() => {
        o.style.transform = "scale(0.3)";
        o.style.opacity = "0";
      }, 100);
      setTimeout(() => {
        o.remove();
      }, 400);
    }

    updateCursorColors(cursorColor, ringColor, flareColor);

    // Mouse move event
    const onMouseMove = (e) => {
      const r = e.pageX;
      const o = e.pageY;
      cursor.style.left = r + "px";
      cursor.style.top = o + "px";
      cursorRing.style.left = r + "px";
      cursorRing.style.top = o + "px";
      createCursorFlare(r, o);

      if (
        (heroSection && isCursorInSection(e, heroSection)) ||
        (footerSection && isCursorInSection(e, footerSection))
      ) {
        updateCursorColors(
          "#ffffff",
          "rgb(255, 255, 255)",
          "rgba(255, 255, 255, 0.7)"
        );
        saveCursorColors("#ffffff", "", "rgba(255, 255, 255, 0.7)");
      } else {
        updateCursorColors(
          "#7002ee",
          "rgb(110, 27, 204)",
          "rgba(112, 2, 238, 0.7)"
        );
        saveCursorColors(
          "#7002ee",
          "rgb(110, 27, 204)",
          "rgba(112, 2, 238, 0.7)"
        );
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.backgroundColor = "#4d01a5";
        cursorRing.style.transform = "scale(2)";
      });
      e.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.backgroundColor = "white";
        cursorRing.style.transform = "scale(1)";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
  <div>
    <div id="cursor" className="cursor">
      <img src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512" alt="Cursor Logo"
        id="cursor-logo" loading="lazy" title="logo" />
    </div>
    <div id="cursor-ring" className="cursor-ring"></div>
  </div>
    </>
  );
};

export default Cursor;
