/*
  Warnings:

  - You are about to drop the column `descricao` on the `Questao` table. All the data in the column will be lost.
  - Added the required column `cpfAutor` to the `Questao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enunciado` to the `Questao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enunciado" TEXT NOT NULL,
    "cpfAutor" TEXT NOT NULL,
    CONSTRAINT "Questao_cpfAutor_fkey" FOREIGN KEY ("cpfAutor") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Questao" ("id") SELECT "id" FROM "Questao";
DROP TABLE "Questao";
ALTER TABLE "new_Questao" RENAME TO "Questao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
