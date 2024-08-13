-- CreateTable
CREATE TABLE "chords" (
    "id" SERIAL NOT NULL,
    "strings" VARCHAR(255) NOT NULL,
    "fingering" VARCHAR(255) NOT NULL,
    "chordName" VARCHAR(255) NOT NULL,
    "enharmonicChordName" VARCHAR(255) NOT NULL,
    "voicingID" INTEGER NOT NULL,
    "tones" VARCHAR(255) NOT NULL,

    CONSTRAINT "chords_pkey" PRIMARY KEY ("id")
);
