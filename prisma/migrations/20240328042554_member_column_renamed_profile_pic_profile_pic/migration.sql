/*
  Warnings:

  - You are about to drop the column `profile_pic` on the `Member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "profile_pic",
ADD COLUMN     "profilePic" TEXT;
