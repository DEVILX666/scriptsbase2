export interface GameScript {
  id: string
  name: string
  description: string
  category: "FPS" | "RPG" | "Simulator" | "Adventure" | "Obby" | "Horror" | "Other"
  features: string[]
  logoUrl: string
}

export const gameScripts: GameScript[] = [
  {
    id: "steal-brainrot",
    name: "Steal a Brainrot",
    description: "",
    category: "Adventure",
    features: ["Auto Steal", "Item ESP", "Speed Hack", "TELEPORT", "FLY"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-380d1634b060dfae54e93d379c68202c/150/150/Image/Webp/noFilter",
  },
  {
    id: "plants-vs-brainrots",
    name: "Adopt Me",
    description: "",
    category: "Other",
    features: ["Item Dupe", "Auto Farm & Auto Buy", "Auto-Attack", "Kill-Aura", "No Cooldown"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-4968d84e05e72d3047b79c13d21bb871/150/150/Image/Webp/noFilter",
  },
  {
    id: "brook-haven",
    name: "Brookhaven",
    description: "",
    category: "Simulator",
    features: ["Spawn Pets & Seeds", "Steal People Fruits", "Dupe Fruits", "Instant Grow", "Teleport"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-0144ec895ff0bd982c0e1cd05588a499/150/150/Image/Webp/noFilter",
  },
  {
    id: "brook-haven",
    name: "RIVALS",
    description: "",
    category: "Simulator",
    features: ["Spawn Pets & Seeds", "Steal People Fruits", "Dupe Fruits", "Instant Grow", "Teleport"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-a478ae0d557fbd150e34b4bf4133996c/150/150/Image/Webp/noFilter",
  },
  {
    id: "brook-haven",
    name: "Murder Mystery 2",
    description: "",
    category: "Simulator",
    features: ["Spawn Pets & Seeds", "Steal People Fruits", "Dupe Fruits", "Instant Grow", "Teleport"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-cee6edfb36f7c1d81e9ab0729d084de5/150/150/Image/Webp/noFilter",
  },
  {
    id: "grow-garden",
    name: "99 Nights in the Forest",
    description: "",
    category: "Simulator",
    features: ["Spawn Pets & Seeds", "Steal People Fruits", "Dupe Fruits", "Instant Grow", "Teleport"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-fbe1353717fb87b305db853ceaccab25/150/150/Image/Webp/noFilter",
  },
  {
    id: "brookhaven",
    name: "Blox Fruits",
    description: "",
    category: "RPG",
    features: ["Teleport", "Speed Hack", "Godmode", "Item Spawn", "Fly"],
    logoUrl: "https://tr.rbxcdn.com/180DAY-90afa57850c8c8d1518b398b6c119ee9/150/150/Image/Webp/noFilter",
  }, 
]
