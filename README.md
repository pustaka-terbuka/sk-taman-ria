# Koleksi Bibliografi SK Taman Ria (Pustaka Terbuka)

> **PustakaTerbuka: an open, shared MARC catalog for Malaysian schools and libraries.**  
> *Katalog Induk Bibliografi rasmi Sekolah Kebangsaan Taman Ria, Sungai Petani, Kedah untuk perkongsian data terbuka di [Pustaka Terbuka](https://github.com/pustaka-terbuka).*

Katalog ini disegerakkan secara automatik dari sistem automasi perpustakaan sekolah **ErrinILS**.

## Ringkasan Koleksi
- **Jumlah Judul / Naskhah**: 5
- **Organisasi**: `pustaka-terbuka`
- **Repositori**: `sk-taman-ria`
- **Tarikh Kemas Kini**: 2026-11-21 14:18:16

## Format Data Disediakan
| Fail | Format | Keterangan |
| --- | --- | --- |
| [`catalog.json`](catalog.json) | JSON | Data katalog penuh berstruktur JSON untuk integrasi web dan aplikasi |
| [`holdings.csv`](holdings.csv) | CSV | Senarai perolehan dan pegangan fizikal buku sekolah (Excel / Sheet) |
| [`catalog.mrc`](catalog.mrc) | MARC 21 (ISO 2709) | Format piawai antarabangsa MARC 21 untuk sistem perpustakaan (Koha, SLiMS, Destiny) |
| [`catalog.mrk`](catalog.mrk) | MarcEdit Text | Format teks mnemonik MarcEdit untuk penyuntingan pukal |
| [`catalog.xml`](catalog.xml) | MARCXML | Koleksi MARCXML rasmi Library of Congress |

## Cara Penggunaan dan Sinkronisasi
1. **ErrinILS Desktop**: Buka ErrinILS pada mana-mana komputer sekolah, tekan **Sync with GitHub** pada tab Catalog atau Settings.
2. **Komputer Lain**: Pasang ErrinILS pada PC kedua, rekod katalog akan dimuat turun secara automatik dari repositori ini.
3. **Pustaka Terbuka Union OPAC**: Rekod dari repositori ini digabungkan secara automatik ke dalam portal OPAC pusat di [pustaka-terbuka.github.io/opac](https://pustaka-terbuka.github.io/opac/).
