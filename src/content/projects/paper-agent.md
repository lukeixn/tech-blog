---
title: Paper Agent
description: A modular assistant for extracting, indexing and querying research papers.
date: 2026-09-24
status: Prototype
tags: [Research Workflow, RAG]
stack: [Python, LangGraph, FAISS]
featured: true
---

## Overview

An engineering project around turning papers into structured, searchable notes. The intended pipeline separates extraction, schema validation, vector indexing and agent analysis.

```mermaid
flowchart LR
  PDF --> E[Extract]
  E --> I[Index]
  I --> Q[Query]
```

## What to add before publication

Link the exact repository, document the current implementation, include a sample query and its trace, and distinguish implemented features from planned agents. The public code link is intentionally absent until verified.
