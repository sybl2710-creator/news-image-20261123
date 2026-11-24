# The Global Ledger — Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123) [![rank](https://make.fun/badge/news-image-20261123/sybl2710-creator/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123) [![reward](https://make.fun/badge/news-image-20261123/sybl2710-creator/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A single-page newspaper front page wrapping up Monday 23 November 2026, set
in a dense broadsheet grid with a masthead, a stacked-column lead story, and a
crawling ticker strip along the bottom.

## The front page

The lead story is Nvidia's board reinstating Jensen Huang as chief executive
after Trump pressed the board — a reversal the market answers immediately, with
the shares up 31% and the S&P 500 closing 4.7% higher, its index chart running
beside the headline.

Down the page, COP31 in Antalya collapses without a deal after a 49-hour
overrun, delegates leaving with no agreed text. A second story reports Ukraine
sinking a Russian warship off Libya using sea drones. A third covers sweeping
US sanctions aimed at Iran's shadow banking networks.

The ticker strip at the foot of the page carries four shorter items: a factory
fire in Indonesia that killed 24 people; a singer in Iran sentenced to 74
lashes; a Delta systems glitch that delayed more than 1,000 flights; and GTA VI
taking $3.79bn on its first day.

## How it is built

`entry.png` is the finished image — the whole page is rendered ahead of time
and committed as-is. `main.ts` does one job: it reads `entry.png` beside the
script and writes identical bytes to `$MAKEFUN_OUTPUT_DIR/entry.png`
(`/output` when the variable is unset). There is no rendering, randomness, or
network access in the build, so two runs produce byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22; no dependencies.
