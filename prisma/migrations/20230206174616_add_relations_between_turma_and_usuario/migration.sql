/*
  Warnings:

  - Added the required column `cpfProfessor` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_alunos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_alunos_A_fkey" FOREIGN KEY ("A") REFERENCES "Turma" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_alunos_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("cpf") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Turma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataInicio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFim" DATETIME NOT NULL,
    "cpfProfessor" TEXT NOT NULL,
    CONSTRAINT "Turma_cpfProfessor_fkey" FOREIGN KEY ("cpfProfessor") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Turma" ("dataFim", "dataInicio", "id") SELECT "dataFim", "dataInicio", "id" FROM "Turma";
DROP TABLE "Turma";
ALTER TABLE "new_Turma" RENAME TO "Turma";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_alunos_AB_unique" ON "_alunos"("A", "B");

-- CreateIndex
CREATE INDEX "_alunos_B_index" ON "_alunos"("B");
