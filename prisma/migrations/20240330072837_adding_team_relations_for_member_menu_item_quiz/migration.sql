/*
  Warnings:

  - You are about to drop the `_MemberToTeam` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `MenuItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MemberToTeam" DROP CONSTRAINT "_MemberToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_MemberToTeam" DROP CONSTRAINT "_MemberToTeam_B_fkey";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MenuItem" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_MemberToTeam";

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
