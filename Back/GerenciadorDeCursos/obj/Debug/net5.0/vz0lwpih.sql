IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Categorias] (
    [CategoriaId] int NOT NULL IDENTITY,
    [Nome] nvarchar(max) NULL,
    CONSTRAINT [PK_Categorias] PRIMARY KEY ([CategoriaId])
);
GO

CREATE TABLE [Cursos] (
    [CursoId] int NOT NULL IDENTITY,
    [Nome] nvarchar(40) NOT NULL,
    [Descricao] nvarchar(150) NOT NULL,
    [DtInicio] datetime2 NOT NULL,
    [DtTermino] datetime2 NOT NULL,
    [QtdAlunos] int NOT NULL,
    [CategoriaId] int NOT NULL,
    CONSTRAINT [PK_Cursos] PRIMARY KEY ([CursoId])
);
GO

CREATE TABLE [Logs] (
    [LogId] int NOT NULL IDENTITY,
    [UsuarioId] int NOT NULL,
    [CursoId] int NOT NULL,
    [DtInclusao] datetime2 NOT NULL,
    [DtAlteracao] datetime2 NOT NULL,
    CONSTRAINT [PK_Logs] PRIMARY KEY ([LogId])
);
GO

CREATE TABLE [Usuarios] (
    [UsuarioId] int NOT NULL IDENTITY,
    [Nome] nvarchar(40) NOT NULL,
    [Login] nvarchar(10) NOT NULL,
    [Senha] nvarchar(12) NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([UsuarioId])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20211117182642_Initial', N'5.0.12');
GO

COMMIT;
GO

