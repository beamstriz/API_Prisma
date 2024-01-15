/*
  Warnings:

  - You are about to drop the `descricao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "descricao";

-- CreateTable
CREATE TABLE "dados" (
    "id" SERIAL NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "pai" TEXT NOT NULL,
    "mae" TEXT NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "dados_pkey" PRIMARY KEY ("id")
);
