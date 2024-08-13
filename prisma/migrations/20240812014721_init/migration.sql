-- CreateTable
CREATE TABLE "Chords" (
    "id" SERIAL NOT NULL,
    "strings" VARCHAR(255) NOT NULL,
    "fingering" VARCHAR(255) NOT NULL,
    "chordName" VARCHAR(255) NOT NULL,
    "enharmonicChordName" VARCHAR(255) NOT NULL,
    "voicingID" INTEGER NOT NULL,
    "tones" VARCHAR(255) NOT NULL,

    CONSTRAINT "Chords_pkey" PRIMARY KEY ("id")
);
