---
title: CNN-ViT Small Object Research
description: A replaceable experiment framework for local detail retrieval in a ViT backbone.
date: 2026-09-20
status: In progress
tags: [Research Code, Small Objects]
stack: [PyTorch, ViT-B, CNN]
featured: true
---

## Architecture goal

Build independent modules for CNN extraction, local archive construction, cross-attention retrieval, ViT fusion and evaluation. A configuration file selects implementations; a model factory assembles them into a top-level model.

## Reproducibility checklist

Save the baseline configuration, dataset split, random seeds, evaluation command, parameter count and FLOPs. Publish ablation results only after comparable runs finish.
