-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Anonymous',
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "answer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Anonymous',
    "content" TEXT NOT NULL,
    "question_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "question_id_key" ON "question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "answer_id_key" ON "answer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "answer_question_id_key" ON "answer"("question_id");

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
