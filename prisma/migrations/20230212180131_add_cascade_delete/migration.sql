-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ValorExato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gabarito" INTEGER NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "ValorExato_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ValorExato" ("gabarito", "id", "idQuestao") SELECT "gabarito", "id", "idQuestao" FROM "ValorExato";
DROP TABLE "ValorExato";
ALTER TABLE "new_ValorExato" RENAME TO "ValorExato";
CREATE UNIQUE INDEX "ValorExato_idQuestao_key" ON "ValorExato"("idQuestao");
CREATE TABLE "new_CertoOuErrado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gabarito" BOOLEAN NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "CertoOuErrado_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CertoOuErrado" ("gabarito", "id", "idQuestao") SELECT "gabarito", "id", "idQuestao" FROM "CertoOuErrado";
DROP TABLE "CertoOuErrado";
ALTER TABLE "new_CertoOuErrado" RENAME TO "CertoOuErrado";
CREATE UNIQUE INDEX "CertoOuErrado_idQuestao_key" ON "CertoOuErrado"("idQuestao");
CREATE TABLE "new_MultiplaEscolha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemA" TEXT NOT NULL,
    "itemB" TEXT NOT NULL,
    "itemC" TEXT NOT NULL,
    "itemD" TEXT NOT NULL,
    "idGabarito" INTEGER NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "MultiplaEscolha_idGabarito_fkey" FOREIGN KEY ("idGabarito") REFERENCES "Opcao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MultiplaEscolha_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MultiplaEscolha" ("id", "idGabarito", "idQuestao", "itemA", "itemB", "itemC", "itemD") SELECT "id", "idGabarito", "idQuestao", "itemA", "itemB", "itemC", "itemD" FROM "MultiplaEscolha";
DROP TABLE "MultiplaEscolha";
ALTER TABLE "new_MultiplaEscolha" RENAME TO "MultiplaEscolha";
CREATE UNIQUE INDEX "MultiplaEscolha_idQuestao_key" ON "MultiplaEscolha"("idQuestao");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
