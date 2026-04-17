-- CreateTable
CREATE TABLE "Signature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "district" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "signatureId" TEXT NOT NULL,
    "topConcerns" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "endWar" TEXT NOT NULL DEFAULT '',
    "article25" TEXT NOT NULL DEFAULT '',
    "investigations" TEXT NOT NULL DEFAULT '',
    "solutions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "willOrganize" BOOLEAN NOT NULL DEFAULT false,
    "canContact" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "otherIssues" TEXT,
    "endUnauthorizedConflicts" TEXT,
    "authoritarianGuardrails" TEXT,
    "prosecuteCorruption" TEXT,
    "affordableHealthcare" TEXT,
    "housingStability" TEXT,
    "foodSecurity" TEXT,
    "tradeStability" TEXT,
    "ageRange" TEXT,
    "politicalIdentity" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Signature_zipCode_idx" ON "Signature"("zipCode");

-- CreateIndex
CREATE INDEX "Signature_createdAt_idx" ON "Signature"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Survey_signatureId_key" ON "Survey"("signatureId");

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "Signature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
