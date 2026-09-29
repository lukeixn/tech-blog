---
title: Sub-patch Detail Archive
description: Spatially indexed local feature slots that ViT queries can inspect within a patch.
date: 2026-09-22
status: Concept
tags: [Cross-attention, Position, Sub-patch]
featured: true
---

## Idea

For each coarse ViT patch, store several local CNN descriptors as addressable slots. Give every slot a location encoding. At selected transformer depths, use ViT queries to retrieve details from the corresponding level of the archive.

## Key tests

Compare against pooled CNN features, unpositioned slots, and shuffled slot positions. Measure whether the improvement comes from fine spatial information or simply extra capacity. No results have been recorded here.
