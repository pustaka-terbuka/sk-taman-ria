# SK Taman Ria (STR) Harvester Runbook

> **Operational guide for harvesting and synchronizing bibliographic records from SK Taman Ria.**

## Target System Profile
* **Institution:** SK Taman Ria
* **Organization Code:** `STR` (Priority: 10)
* **Source Code:** `sk-taman-ria`
* **Catalog Software:** ErrinILS
* **OPAC URL:** `https://pustaka-terbuka.github.io/sk-taman-ria/`

## Ingestion & Conversion Rules
* **Output Inbox:** `harvest/inbox/sk-taman-ria/<run-id>/`
* **MARC Format:** Native MARC 21 Slim XML wrapped in `<collection xmlns="http://www.loc.gov/MARC21/slim">`
* **Tag Preservation:**
  * Control number `001`: Barcode / Accession number
  * Organization identifier `003`: `STR`
  * Classification `082`: Dewey Decimal (DDC)
  * Local holdings `852` / `952`: Branch codes, barcodes, and call numbers
