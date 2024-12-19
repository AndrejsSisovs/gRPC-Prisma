/*
  Warnings:

  - You are about to drop the `Description` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `availibility` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Description" DROP CONSTRAINT "Description_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" TEXT,
DROP COLUMN "availibility",
ADD COLUMN     "availibility" TEXT NOT NULL;

-- DropTable
DROP TABLE "Description";

-- DropEnum
DROP TYPE "Availibility";
