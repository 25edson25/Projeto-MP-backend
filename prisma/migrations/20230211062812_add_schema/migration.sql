-- CreateTable
CREATE TABLE "Papel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CertoOuErrado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gabarito" BOOLEAN NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "CertoOuErrado_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ValorExato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gabarito" INTEGER NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "ValorExato_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Questao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enunciado" TEXT NOT NULL,
    "cpfAutor" TEXT NOT NULL,
    CONSTRAINT "Questao_cpfAutor_fkey" FOREIGN KEY ("cpfAutor") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prova" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horarioInicio" DATETIME NOT NULL,
    "horarioFim" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataInicio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFim" DATETIME NOT NULL,
    "cpfProfessor" TEXT NOT NULL,
    CONSTRAINT "Turma_cpfProfessor_fkey" FOREIGN KEY ("cpfProfessor") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MultiplaEscolha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemA" TEXT NOT NULL,
    "itemB" TEXT NOT NULL,
    "itemC" TEXT NOT NULL,
    "itemD" TEXT NOT NULL,
    "idGabarito" INTEGER NOT NULL,
    "idQuestao" INTEGER NOT NULL,
    CONSTRAINT "MultiplaEscolha_idGabarito_fkey" FOREIGN KEY ("idGabarito") REFERENCES "Opcao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MultiplaEscolha_idQuestao_fkey" FOREIGN KEY ("idQuestao") REFERENCES "Questao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Opcao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PapelToUsuario" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PapelToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Papel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PapelToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("cpf") ON DELETE CASCADE ON UPDATE CASCADE
);

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

-- CreateTable
CREATE TABLE "_alunos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_alunos_A_fkey" FOREIGN KEY ("A") REFERENCES "Turma" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_alunos_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("cpf") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CertoOuErrado_idQuestao_key" ON "CertoOuErrado"("idQuestao");

-- CreateIndex
CREATE UNIQUE INDEX "ValorExato_idQuestao_key" ON "ValorExato"("idQuestao");

-- CreateIndex
CREATE UNIQUE INDEX "MultiplaEscolha_idQuestao_key" ON "MultiplaEscolha"("idQuestao");

-- CreateIndex
CREATE UNIQUE INDEX "_PapelToUsuario_AB_unique" ON "_PapelToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_PapelToUsuario_B_index" ON "_PapelToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProvaToQuestao_AB_unique" ON "_ProvaToQuestao"("A", "B");

-- CreateIndex
CREATE INDEX "_ProvaToQuestao_B_index" ON "_ProvaToQuestao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProvaToTurma_AB_unique" ON "_ProvaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_ProvaToTurma_B_index" ON "_ProvaToTurma"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_alunos_AB_unique" ON "_alunos"("A", "B");

-- CreateIndex
CREATE INDEX "_alunos_B_index" ON "_alunos"("B");
