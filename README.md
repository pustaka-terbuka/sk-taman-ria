# Pustaka Terbuka — SK Taman Ria Data Provider

> **PustakaTerbuka: an open, shared MARC catalog for Malaysian schools and libraries.**  
> *Official SK Taman Ria (STR) Bibliographic Dataset and Harvester.*

This repository contains the MARCXML bibliographic catalog synchronized from **SK Taman Ria** via **ErrinILS** for consumption by the Pustaka Terbuka Union Catalog ([`pustaka-terbuka/opac`](https://github.com/pustaka-terbuka/opac)).

---

## Catalog Overview

- **Source Code:** `sk-taman-ria`
- **Organization Code:** `STR`
- **Institution:** SK Taman Ria
- **Source Priority:** 10
- **ILS Platform:** ErrinILS (School Integrated Library System)
- **Classification:** Dewey Decimal Classification (DDC)
- **Catalog Size:** 246 records
- **Repository:** `pustaka-terbuka/sk-taman-ria`
- **Reference Sibling:** `sk-taman-ria`
- **Last Synced:** 2026-11-25 04:10:02 UTC

---

## Repository Structure & Integration

This repository follows the official Pustaka Terbuka Data Provider standard (as modeled by PPAPP and sibling providers):

- `data/sources.json` — Source definition and authority priority.
- `data/orgs.json` — Organization metadata, state, classification scheme, and contact.
- `data/aliases.jsonl` — Canonical alias mapping table (ISBN, 035, and fallback keys to permanent Crockford Base32 IDs).
- `data/bib/<shard>/<id>.xml` — Partitioned single-record MARCXML files for downstream OPAC indexing.
- `data/holdings/STR.csv` — Normalized institutional holdings table.
- `harvest/inbox/sk-taman-ria/<run-id>/` — Intake batches with `manifest.json`, `partition_state.json`, `provenance.jsonl`, and `records/batch_0.xml`.
- `tools/` — Self-contained validation, merging, and alias resolution scripts.
- `package.json` — NPM toolchain scripts (`test`, `validate-inbox`, `merge`).

### Convenience Exports
For school librarians and external spreadsheets, the root directory also contains:
- [`catalog.json`](catalog.json) — Full JSON export
- [`holdings.csv`](holdings.csv) — CSV accession and inventory list
- [`catalog.mrc`](catalog.mrc) — Binary MARC 21 (ISO 2709) export
- [`catalog.mrk`](catalog.mrk) — MarcEdit text mnemonic format
- [`catalog.xml`](catalog.xml) — Multi-record MARCXML collection
