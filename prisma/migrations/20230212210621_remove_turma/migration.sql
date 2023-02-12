/*
  Warnings:

  - You are about to drop the `Turma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProvaToTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_alunos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Turma";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProvaToTurma";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_alunos";
PRAGMA foreign_keys=on;
