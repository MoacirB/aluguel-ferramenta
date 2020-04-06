-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 06-Abr-2020 às 21:38
-- Versão do servidor: 5.7.23
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aluguel_ferramenta`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluguel`
--

DROP TABLE IF EXISTS `aluguel`;
CREATE TABLE IF NOT EXISTS `aluguel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_ferramenta` int(11) NOT NULL,
  `quantidade_dias` int(11) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ferramenta` (`id_ferramenta`),
  KEY `fk_usuario` (`id_usuario`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aluguel`
--

INSERT INTO `aluguel` (`id`, `id_usuario`, `id_ferramenta`, `quantidade_dias`, `data`) VALUES
(2, 2, 1, 7, '2020-03-21'),
(3, 2, 4, 7, '2020-04-09'),
(4, 2, 4, 3, '2020-04-27'),
(5, 2, 4, 1, '2020-05-26'),
(6, 4, 1, 1, '2020-05-26');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
