import { useEffect, useState } from "react";
export type Route = "home" | "privacy" | "terms";
function parseHash(): Route { if (typeof window === "undefined") return "home"; const hash = window.location.hash.toLowerCase(); if (hash.startsWith("#/privacy")) return "privacy"; if (hash.startsWith("#/terms")) return "terms"; return "home"; }
export function useHashRoute(): Route { const [route, setRoute] = useState<Route>(parseHash); useEffect(() => { const onHashChange = () => setRoute(parseHash()); window.addEventListener("hashchange", onHashChange); return () => window.removeEventListener("hashchange", onHashChange); }, []); useEffect(() => { if (route !== "home") window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, [route]); return route; }
