---
title: Why Vision Transformers Lose Small Objects
description: A practical breakdown of patch sampling, scale, and token competition in small object recognition.
date: 2026-09-25
category: Computer Vision
tags: [ViT, Small Objects, Detection]
readingTime: 5
featured: true
---

## The problem starts before attention

A ViT does not see raw pixels after patch embedding. For a patch size $P$, an image of size $H \times W$ becomes roughly $(H/P)(W/P)$ tokens. A small object can occupy only a few pixels inside one patch. Its signal is mixed with background before the first transformer block.

The patch embedding is a learned projection of the flattened patch:

$$z_i = W_E\,\mathrm{vec}(x_i) + b_E.$$

This projection is capable of preserving useful detail, but training objectives and limited token capacity do not guarantee that weak object cues survive. Patch size alone is therefore not the complete explanation.

## Three places detail can disappear

1. **Input sampling:** downsampling and patchification make small shapes hard to distinguish.
2. **Feature mixing:** attention can favor larger, more reliable regions when the tiny target has weak evidence.
3. **Prediction scale:** a detection head with coarse features may struggle to localize even when semantic evidence remains.

For example, if an object is $8 \times 8$ pixels in a $16 \times 16$ patch, it occupies one quarter of that patch. After resizing the whole image, its footprint may shrink further. The exact effect depends on preprocessing, backbone, training data and head design.

## What to measure

Compare small-object AP alongside medium and large AP, but inspect recall and localization error too. A useful ablation holds training and detector head fixed while changing patch size or adding a high-resolution branch. Visualize token responses near target boundaries, and test background distractors.

```python
# Illustration only: report AP by size using the same evaluator and split.
metrics = {"AP_small": None, "AP_medium": None, "AP_large": None}
```

## A working design hypothesis

Local CNN features may offer spatial detail while ViT tokens retain broad context. Cross-attention from the ViT tokens into a local feature archive is one way to make detail retrievable. Whether it helps must be established through controlled experiments; a larger model or different training recipe can otherwise explain the gain.
