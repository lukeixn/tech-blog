---
title: CNN-guided ViT for Small Object Recognition
description: A modular research direction connecting high-resolution CNN detail with ViT context.
date: 2026-09-25
status: In progress
tags: [ViT-B, CNN, Small Objects]
featured: true
---

## Hypothesis

Small target cues can be diluted by patchification and later token mixing. A local CNN detail pathway may help if the ViT can retrieve the relevant evidence at appropriate layers.

## Experimental outline

Use ViT-B as the reference backbone. Compare equal training recipes, report size-specific metrics, and ablate retrieval and fusion independently. Record parameter count and compute cost alongside performance. See the [design note](../../blog/cnn-guided-sub-patch-detail-archive-for-vit/) for proposed components.

## Status

Architecture exploration. Add implementation, datasets and verified measurements when available.
