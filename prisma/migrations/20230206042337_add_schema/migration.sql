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
    "gabarito" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ValorExato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gabarito" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Questao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
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
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MultiplaEscolha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemA" TEXT NOT NULL,
    "itemB" TEXT NOT NULL,
    "itemC" TEXT NOT NULL,
    "itemD" TEXT NOT NULL,
    "idGabarito" INTEGER NOT NULL,
    CONSTRAINT "MultiplaEscolha_idGabarito_fkey" FOREIGN KEY ("idGabarito") REFERENCES "Opcao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PapelToUsuario_AB_unique" ON "_PapelToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_PapelToUsuario_B_index" ON "_PapelToUsuario"("B");
