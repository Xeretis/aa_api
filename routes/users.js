var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    email: "star_gazer22@cosmicmail.net",
    name: "Anya Petrova",
    isOnline: true,
    tag: "@AnyaP",
    interests: ["astronomy", "stargazing", "science fiction"]
  },
  {
    id: 2,
    email: "coding_wizard99@techhaven.org",
    name: "Ben Carter",
    isOnline: false,
    tag: "@BenC",
    interests: ["programming", "web development", "open source"]
  },
  {
    id: 3,
    email: "artful_dodger@gallery.com",
    name: "Clara Dubois",
    isOnline: true,
    tag: "@ClaraD",
    interests: ["painting", "sculpture", "art history"]
  },
  {
    id: 4,
    email: "midnight_rider@roadtrip.us",
    name: "David Lee",
    isOnline: false,
    tag: "@DavidL",
    interests: ["travel", "photography", "hiking"]
  },
  {
    id: 5,
    email: "bookworm_extraordinaire@library.co.uk",
    name: "Eleanor Vance",
    isOnline: true,
    tag: "@EleanorV",
    interests: ["literature", "classic novels", "poetry"]
  },
  {
    id: 6,
    email: "chef_delight@culinarycorner.net",
    name: "Felix Moreau",
    isOnline: true,
    tag: "@FelixM",
    interests: ["cooking", "baking", "wine tasting"]
  },
  {
    id: 7,
    email: "green_thumb_gal@gardenlife.org",
    name: "Grace Hernandez",
    isOnline: false,
    tag: "@GraceH",
    interests: ["gardening", "botany", "permaculture"]
  },
  {
    id: 8,
    email: "history_buff45@archives.edu",
    name: "Henry Ito",
    isOnline: true,
    tag: "@HenryI",
    interests: ["history", "ancient civilizations", "genealogy"]
  },
  {
    id: 9,
    email: "jazz_cat@musicmojo.com",
    name: "Isabelle Dubois",
    isOnline: false,
    tag: "@IsabelleD",
    interests: ["jazz", "music theory", "live music"]
  },
  {
    id: 10,
    email: "keeper_of_secrets@mysterymanor.net",
    name: "Jasper Blackwood",
    isOnline: true,
    tag: "@JasperB",
    interests: ["mystery novels", "escape rooms", "crime fiction"]
  },
  {
    id: 11,
    email: "laughing_loon@comedycentral.tv",
    name: "Katherine O'Connell",
    isOnline: false,
    tag: "@KatherineO",
    interests: ["comedy", "stand-up", "improv"]
  },
  {
    id: 12,
    email: "mountain_man@peakperformance.com",
    name: "Liam Nguyen",
    isOnline: true,
    tag: "@LiamN",
    interests: ["hiking", "rock climbing", "camping"]
  },
  {
    id: 13,
    email: "night_owl@sleepless.city",
    name: "Maya Singh",
    isOnline: false,
    tag: "@MayaS",
    interests: ["nightlife", "clubbing", "mixology"]
  },
  {
    id: 14,
    email: "ocean_breeze@seaside.ca",
    name: "Noah Rodriguez",
    isOnline: true,
    tag: "@NoahR",
    interests: ["oceanography", "marine biology", "scuba diving"]
  },
  {
    id: 15,
    email: "puzzle_master@enigmatic.org",
    name: "Olivia Kim",
    isOnline: true,
    tag: "@OliviaK",
    interests: ["puzzles", "crosswords", "sudoku"]
  },
  {
    id: 16,
    email: "quantum_leap@physicsfun.net",
    name: "Peter Schmidt",
    isOnline: false,
    tag: "@PeterS",
    interests: ["physics", "quantum mechanics", "science"]
  },
  {
    id: 17,
    email: "rainbow_rider@colorful.world",
    name: "Quinn Patel",
    isOnline: true,
    tag: "@QuinnP",
    interests: ["painting", "digital art", "graphic design"]
  },
  {
    id: 18,
    email: "silent_observer@watchful.eye",
    name: "Rachel Goldberg",
    isOnline: false,
    tag: "@RachelG",
    interests: ["photography", "portrait photography", "landscape photography"]
  },
  {
    id: 19,
    email: "twilight_dreamer@dreamscape.com",
    name: "Samuel Ramirez",
    isOnline: true,
    tag: "@SamuelR",
    interests: ["dreams", "lucid dreaming", "psychology"]
  },
  {
    id: 20,
    email: "urban_explorer@citysecrets.net",
    name: "Tessa Wilson",
    isOnline: false,
    tag: "@TessaW",
    interests: ["urban exploration", "abandoned places", "architecture"]
  }
]

function getRandomOnlineUser() {
  const onlineUsers = users.filter(user => user.isOnline);
  if (onlineUsers.length === 0) {
    return null; 
  }
  const randomIndex = Math.floor(Math.random() * onlineUsers.length);
  return onlineUsers[randomIndex];
}

router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/current-user', (req, res) => {
  const currentUser = getRandomOnlineUser();
  if (currentUser) {
    res.json(currentUser);
  } else {
    res.status(404).json({ message: 'No users are currently online.' });
  }
});

module.exports = router;
