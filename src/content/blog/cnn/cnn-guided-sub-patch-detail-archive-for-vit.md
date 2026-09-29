---
title: CNN-guided Sub-patch Detail Archive for ViT
description: Research note template for a modular CNN-to-ViT detail retrieval experiment; results pending.
date: 2026-09-23
category: Computer Vision
tags: [CNN, ViT, Sub-patch, Research Plan]
readingTime: 3
---

## Research question

Can each ViT patch retrieve spatially organized high-frequency details from a CNN feature archive, then use those details when computing subsequent attention?

## Proposed mechanism

- Start from a ViT-B baseline with an unchanged evaluation protocol.
- Produce multilevel CNN features and align each level to selected ViT blocks.
- Divide the local archive for each patch into addressable detail slots with explicit positional information.
- Let ViT queries retrieve archive content through cross-attention, then incorporate the retrieved information into the ViT attention computation.
- Keep extraction, archive construction, retrieval, fusion and prediction as independently replaceable modules.

## Experiments to run

| Comparison | What it isolates | Result |
| --- | --- | --- |
| ViT-B baseline | Reference performance | Pending |
| + CNN archive | Effect of local details | Pending |
| + positional slots | Effect of slot location | Pending |
| + level-aligned retrieval | Effect of layer alignment | Pending |

## Open questions

How many archive slots are useful? Which layer pairs should interact? Do the gains persist after controlling for parameters, FLOPs and input resolution? What happens to $AP_{small}$ and false positives on textured backgrounds?

> This is a design outline. No experimental results or publication claims are made here.
