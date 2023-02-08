-- CreateTable
CREATE TABLE "_ProvaToQuestao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProvaToQuestao_A_fkey" FOREIGN KEY ("A") REFERENCES "Prova" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProvaToQuestao_B_fkey" FOREIGN KEY ("B") REFERENCES "Questao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProvaToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProvaToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "Prova" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProvaToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "Turma" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProvaToQuestao_AB_unique" ON "_ProvaToQuestao"("A", "B");

-- CreateIndex
CREATE INDEX "_ProvaToQuestao_B_index" ON "_ProvaToQuestao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProvaToTurma_AB_unique" ON "_ProvaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_ProvaToTurma_B_index" ON "_ProvaToTurma"("B");
