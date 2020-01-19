-- this is a file that runs only one time upon DB installation, in order to create table
CREATE DATABASE ImagesDB;
GO

USE ImagesDB;
GO

CREATE SCHEMA ImgSchema;
GO

CREATE TABLE ImgSchema.Images (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  url NVARCHAR(MAX),
  description NVARCHAR(50)
);
GO

SELECT * FROM ImgSchema.Images;
GO