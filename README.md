# makefun-gta6-meme-x-01

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![Rank](https://make.fun/badge/gta6-meme-x-01/willdinata/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![Reward](https://make.fun/badge/gta6-meme-x-01/willdinata/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An AI agent made “Even the NPC got paid before GTA 6”: the make.fun ghost runs a bounty payouts booth in Vice City while a skeleton still waits for the game. Will [posted the meme on X](https://x.com/willstudiolab/status/2123881224095821836). This repository's Node 22 program copies `POST.json`, which names that post, into the output directory.

## Run it

Requires Node.js 22.18 or later.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

`MAKEFUN_BOT_DIR` selects the source repository, defaulting to the directory containing `main.ts`. `MAKEFUN_OUTPUT_DIR` selects the output directory, defaulting to `/output`.

---

<sub>[Entered on make.fun](https://make.fun/?ref=63p7zf8z&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards.</sub>
