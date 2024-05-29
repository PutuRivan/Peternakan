-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Bulan Mei 2024 pada 16.36
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moomeadows`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `babi`
--

CREATE TABLE `babi` (
  `idbabi` int(11) NOT NULL,
  `jenis_babi` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Jantan','Betina') NOT NULL,
  `umur` int(11) NOT NULL,
  `berat` decimal(10,2) NOT NULL,
  `kondisi` enum('Sehat','Sakit') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `babi`
--

INSERT INTO `babi` (`idbabi`, `jenis_babi`, `jenis_kelamin`, `umur`, `berat`, `kondisi`) VALUES
(1, 'Berkshire', 'Jantan', 3, 150.75, 'Sakit'),
(2, 'Yorkshire', 'Betina', 2, 130.50, 'Sehat'),
(3, 'Duroc', 'Jantan', 4, 160.20, 'Sakit'),
(4, 'Hampshire', 'Betina', 5, 170.30, 'Sehat'),
(5, 'Landrace', 'Jantan', 3, 145.00, 'Sehat'),
(6, 'Chester White', 'Betina', 4, 155.45, 'Sehat'),
(7, 'Poland China', 'Jantan', 2, 140.60, 'Sehat'),
(8, 'Spotted', 'Betina', 3, 135.80, 'Sehat'),
(9, 'Tamworth', 'Jantan', 6, 165.70, 'Sehat'),
(10, 'Large Black', 'Betina', 2, 120.40, 'Sakit'),
(11, 'Hereford', 'Jantan', 4, 150.90, 'Sakit'),
(12, 'Meishan', 'Betina', 5, 160.50, 'Sehat'),
(13, 'Mangalitsa', 'Jantan', 3, 145.20, 'Sehat'),
(14, 'Red Wattle', 'Betina', 4, 175.60, 'Sehat'),
(15, 'Vietnamese Potbelly', 'Jantan', 2, 100.80, 'Sehat');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kambing`
--

CREATE TABLE `kambing` (
  `idkambing` int(11) NOT NULL,
  `jenis_kambing` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Jantan','Betina') NOT NULL,
  `umur` int(11) NOT NULL,
  `berat` decimal(10,2) NOT NULL,
  `kondisi` enum('Sehat','Sakit') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kambing`
--

INSERT INTO `kambing` (`idkambing`, `jenis_kambing`, `jenis_kelamin`, `umur`, `berat`, `kondisi`) VALUES
(1, 'Kambing Etawa', 'Jantan', 3, 65.50, 'Sehat'),
(2, 'Kambing Boer', 'Betina', 2, 70.30, 'Sakit'),
(3, 'Kambing Kacang', 'Jantan', 4, 50.00, 'Sehat'),
(4, 'Kambing Saanen', 'Betina', 3, 55.75, 'Sehat'),
(5, 'Kambing Jamnapari', 'Jantan', 5, 72.80, 'Sakit'),
(6, 'Kambing Peranakan Etawa', 'Betina', 2, 60.60, 'Sehat'),
(7, 'Kambing Marica', 'Jantan', 4, 58.90, 'Sehat'),
(8, 'Kambing Samosir', 'Betina', 3, 53.40, 'Sakit'),
(9, 'Kambing Muara', 'Jantan', 5, 62.70, 'Sehat'),
(10, 'Kambing Merino', 'Betina', 2, 57.80, 'Sehat'),
(11, 'Kambing Boerawa', 'Jantan', 4, 68.30, 'Sakit'),
(12, 'Kambing Kosta', 'Betina', 3, 54.20, 'Sehat'),
(13, 'Kambing Kejobong', 'Jantan', 5, 63.50, 'Sehat'),
(14, 'Kambing Katjang', 'Betina', 2, 49.90, 'Sehat'),
(15, 'Kambing Anglo-Nubian', 'Jantan', 4, 71.60, 'Sakit');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kebutuhan`
--

CREATE TABLE `kebutuhan` (
  `idkebutuhan` int(11) NOT NULL,
  `jenis_kebutuhan` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kuantitas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kebutuhan`
--

INSERT INTO `kebutuhan` (`idkebutuhan`, `jenis_kebutuhan`, `nama`, `kuantitas`) VALUES
(1, 'Pakan', 'Rumput Gajah', 100),
(2, 'Pakan', 'Konsentrat Sapi', 50),
(3, 'Obat', 'Vitamin A', 200),
(4, 'Obat', 'Antibiotik', 30),
(5, 'Peralatan', 'Ember', 10),
(6, 'Peralatan', 'Sekop', 5),
(7, 'Pakan', 'Jagung Giling', 80),
(8, 'Obat', 'Probiotik', 60),
(9, 'Peralatan', 'Selang Air', 15),
(10, 'Pakan', 'Dedak', 120),
(11, 'Obat', 'Obat Cacing', 40),
(12, 'Peralatan', 'Kandang Portabel', 2),
(13, 'Pakan', 'Hay', 90),
(14, 'Obat', 'Antiparasit', 25),
(15, 'Peralatan', 'Sikat', 100);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kesehatan_babi`
--

CREATE TABLE `kesehatan_babi` (
  `idkesehatan` int(11) NOT NULL,
  `idbabi` int(11) NOT NULL,
  `tanggal_sakit` date NOT NULL,
  `penyakit` varchar(100) NOT NULL,
  `penanganan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kesehatan_babi`
--

INSERT INTO `kesehatan_babi` (`idkesehatan`, `idbabi`, `tanggal_sakit`, `penyakit`, `penanganan`) VALUES
(1, 1, '2024-06-10', 'Kolera Babi', 'Isolasi hewan yang sakit, pemberian antibiotik, dan pembersihan kandang secara menyeluruh'),
(2, 3, '2024-06-15', 'Diare', 'Pemberian obat anti-diare dan penyesuaian diet hewan'),
(3, 10, '2024-06-20', 'Flu Babi', 'Pemberian istirahat, pemberian cairan tambahan, dan pemberian obat untuk meredakan gejala'),
(4, 11, '2024-06-25', 'Luka Terbuka', 'Membersihkan luka, mengobati dengan antiseptik, dan memberikan perawatan medis yang sesuai'),
(5, 15, '2024-06-30', 'Rabies', 'Pemberian vaksin rabies segera, isolasi hewan yang terinfeksi, dan pengobatan simptomatik');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kesehatan_kambing`
--

CREATE TABLE `kesehatan_kambing` (
  `idkesehatan` int(11) NOT NULL,
  `idkambing` int(11) NOT NULL,
  `tanggal_sakit` date NOT NULL,
  `penyakit` varchar(100) NOT NULL,
  `penanganan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kesehatan_kambing`
--

INSERT INTO `kesehatan_kambing` (`idkesehatan`, `idkambing`, `tanggal_sakit`, `penyakit`, `penanganan`) VALUES
(1, 2, '2024-05-10', 'Demam', 'Pemberian obat penurun demam'),
(2, 5, '2024-04-20', 'Diare', 'Pemberian obat diare dan elektrolit'),
(3, 8, '2024-03-15', 'Infeksi Mata', 'Pembersihan mata dan pemberian salep antibiotik'),
(4, 11, '2024-05-05', 'Cacingan', 'Pemberian obat cacing oral'),
(5, 15, '2024-04-25', 'Flu', 'Pemberian antibiotik dan istirahat');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kesehatan_sapi`
--

CREATE TABLE `kesehatan_sapi` (
  `idkesehatan` int(11) NOT NULL,
  `idsapi` int(11) NOT NULL,
  `tanggal_sakit` date NOT NULL,
  `penyakit` varchar(100) NOT NULL,
  `penanganan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kesehatan_sapi`
--

INSERT INTO `kesehatan_sapi` (`idkesehatan`, `idsapi`, `tanggal_sakit`, `penyakit`, `penanganan`) VALUES
(1, 2, '2024-07-06', 'Flu Bovine', 'Pemberian antibiotik selama 7 hari'),
(2, 5, '2024-08-11', 'Mastitis', 'Pembersihan dan pemberian salep antibiotik'),
(3, 8, '2024-05-16', 'Infeksi Parasit', 'Pemberian obat antiparasit oral'),
(4, 11, '2024-06-25', 'Pneumonia', 'Pemberian antibiotik dan antiinflamasi'),
(5, 15, '2024-09-29', 'Cacingan', 'Pemberian obat cacing oral');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sapi`
--

CREATE TABLE `sapi` (
  `idsapi` int(11) NOT NULL,
  `jenis_sapi` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Jantan','Betina') NOT NULL,
  `umur` int(11) NOT NULL,
  `berat` decimal(10,2) NOT NULL,
  `kondisi` enum('Sehat','Sakit') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sapi`
--

INSERT INTO `sapi` (`idsapi`, `jenis_sapi`, `jenis_kelamin`, `umur`, `berat`, `kondisi`) VALUES
(1, 'Brahman', 'Jantan', 3, 450.75, 'Sehat'),
(2, 'Limousin', 'Betina', 2, 400.50, 'Sakit'),
(3, 'Simental', 'Jantan', 4, 520.20, 'Sehat'),
(4, 'Angus', 'Betina', 5, 475.30, 'Sehat'),
(5, 'Hereford', 'Jantan', 3, 490.00, 'Sakit'),
(6, 'Charolais', 'Betina', 4, 510.45, 'Sehat'),
(7, 'Gelbvieh', 'Jantan', 2, 430.60, 'Sehat'),
(8, 'Shorthorn', 'Betina', 3, 445.80, 'Sakit'),
(9, 'Holstein', 'Jantan', 6, 525.70, 'Sehat'),
(10, 'Jersey', 'Betina', 2, 360.40, 'Sehat'),
(11, 'Guernsey', 'Jantan', 4, 480.90, 'Sakit'),
(12, 'Ayrshire', 'Betina', 5, 455.50, 'Sehat'),
(13, 'Brown Swiss', 'Jantan', 3, 495.20, 'Sehat'),
(14, 'Simangus', 'Betina', 4, 475.60, 'Sehat'),
(15, 'Red Poll', 'Jantan', 2, 400.80, 'Sakit');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `idusers` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `idusers`, `username`, `password`, `email`, `created_at`) VALUES
(1, '2310511120', 'Rangga Budinovanto', '100120675', 'ranggabdnvo@gmail.com', '2024-05-26 17:39:25'),
(0, '2', 'admin', 'admin123', 'example@gmail.com', '2024-05-29 11:46:47');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `babi`
--
ALTER TABLE `babi`
  ADD PRIMARY KEY (`idbabi`);

--
-- Indeks untuk tabel `kambing`
--
ALTER TABLE `kambing`
  ADD PRIMARY KEY (`idkambing`);

--
-- Indeks untuk tabel `kebutuhan`
--
ALTER TABLE `kebutuhan`
  ADD PRIMARY KEY (`idkebutuhan`);

--
-- Indeks untuk tabel `kesehatan_babi`
--
ALTER TABLE `kesehatan_babi`
  ADD PRIMARY KEY (`idkesehatan`),
  ADD KEY `idbabi` (`idbabi`);

--
-- Indeks untuk tabel `kesehatan_kambing`
--
ALTER TABLE `kesehatan_kambing`
  ADD PRIMARY KEY (`idkesehatan`),
  ADD KEY `idkambing` (`idkambing`);

--
-- Indeks untuk tabel `kesehatan_sapi`
--
ALTER TABLE `kesehatan_sapi`
  ADD PRIMARY KEY (`idkesehatan`),
  ADD KEY `idsapi` (`idsapi`);

--
-- Indeks untuk tabel `sapi`
--
ALTER TABLE `sapi`
  ADD PRIMARY KEY (`idsapi`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `babi`
--
ALTER TABLE `babi`
  MODIFY `idbabi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `kambing`
--
ALTER TABLE `kambing`
  MODIFY `idkambing` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `kebutuhan`
--
ALTER TABLE `kebutuhan`
  MODIFY `idkebutuhan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `kesehatan_babi`
--
ALTER TABLE `kesehatan_babi`
  MODIFY `idkesehatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `kesehatan_kambing`
--
ALTER TABLE `kesehatan_kambing`
  MODIFY `idkesehatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `kesehatan_sapi`
--
ALTER TABLE `kesehatan_sapi`
  MODIFY `idkesehatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `sapi`
--
ALTER TABLE `sapi`
  MODIFY `idsapi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `kesehatan_babi`
--
ALTER TABLE `kesehatan_babi`
  ADD CONSTRAINT `kesehatan_babi_ibfk_1` FOREIGN KEY (`idbabi`) REFERENCES `babi` (`idbabi`);

--
-- Ketidakleluasaan untuk tabel `kesehatan_kambing`
--
ALTER TABLE `kesehatan_kambing`
  ADD CONSTRAINT `kesehatan_kambing_ibfk_1` FOREIGN KEY (`idkambing`) REFERENCES `kambing` (`idkambing`);

--
-- Ketidakleluasaan untuk tabel `kesehatan_sapi`
--
ALTER TABLE `kesehatan_sapi`
  ADD CONSTRAINT `kesehatan_sapi_ibfk_1` FOREIGN KEY (`idsapi`) REFERENCES `sapi` (`idsapi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
