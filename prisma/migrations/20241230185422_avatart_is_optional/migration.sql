-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_People" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "avatar" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "People_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_People" ("avatar", "country", "cpf", "createAt", "id", "name", "updateAt", "userId") SELECT "avatar", "country", "cpf", "createAt", "id", "name", "updateAt", "userId" FROM "People";
DROP TABLE "People";
ALTER TABLE "new_People" RENAME TO "People";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
